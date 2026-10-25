<script lang="ts">
    import { onMount, type Snippet } from 'svelte';

    interface Props {
        src: string;
        poster?: string | undefined;
        leftOffset?: number | string;
        topOffset?: number | string;
        minHeight?: number;
        maxScroll?: number;
        fadeDuration?: number;
        fadeOnLoop?: boolean;
        verticalParallax?: number;
        loop?: boolean;
        class?: string | undefined;
        children?: Snippet;
    }

    let {
        src,
        poster = undefined,
        leftOffset = 0,
        topOffset = 0,
        minHeight = 0,
        maxScroll = 0,
        fadeDuration = 2,
        fadeOnLoop = false,
        verticalParallax = 0,
        loop = false,
        class: className = undefined,
        children
    }: Props = $props();

    let opacity = $state(1);
    let enabled = $state(false);
    let video: HTMLVideoElement | undefined = $state();
    let restartTimeout: ReturnType<typeof setTimeout> | undefined;

    let innerWidth: number = $state(0);
    let scrollY: number = $state(0);

    let contentElem: HTMLDivElement | undefined = $state();
    // Page position of the bottom of the hero (the first child); everything below it is opaque
    let heroBottom = $state(0);

    $effect(() => {
        const hero = contentElem?.firstElementChild;
        if (!hero) return;

        const update = () => heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
        update();
        const observer = new ResizeObserver(update);
        observer.observe(hero);
        observer.observe(document.body);
        return () => observer.disconnect();
    });

    let topOffsetPx = $derived(typeof topOffset === 'number' ? topOffset : (topOffset.endsWith('px') ? parseFloat(topOffset) : 0));

    // The box the poster and video share; both are positioned identically within it.
    // It only needs to reach the bottom of the hero after topOffset pulls it up; the
    // parallax moves it slower than the page scrolls, so that stays covered while scrolling.
    let boxHeight = $derived(Math.max(innerWidth * 0.5625, minHeight, heroBottom - topOffsetPx));

    let vParallaxAmount = $derived(verticalParallax && maxScroll ? (verticalParallax * (Math.min(scrollY, maxScroll) / maxScroll)) : 0);

    // Skip the video where it costs more than it's worth; the poster stands in
    function shouldLoadVideo() {
        const connection = (navigator as Navigator & { connection?: { saveData?: boolean, effectiveType?: string } }).connection;
        return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
            && !window.matchMedia('(max-width: 640px)').matches
            && !connection?.saveData
            && !['slow-2g', '2g', '3g'].includes(connection?.effectiveType ?? '');
    }

    onMount(() => {
        // Don't compete with the rest of the page for bandwidth; start once it has loaded
        const start = () => enabled = shouldLoadVideo();
        if (document.readyState === 'complete') {
            start();
        } else {
            window.addEventListener('load', start, { once: true });
        }

        return () => {
            window.removeEventListener('load', start);
            clearTimeout(restartTimeout);
        };
    });

    $effect(() => {
        if (!video) return;
        // Autoplay is only allowed while muted; set the property explicitly before playing
        video.muted = true;
        video.play().catch(() => {
            // Autoplay blocked or the file failed to load; leave the poster up
        });
    });

    function onTimeUpdate() {
        if (!video || !(fadeOnLoop || !loop)) return;
        // Bring the poster back in ahead of the end so the cut is hidden
        if (video.duration - video.currentTime <= fadeDuration) {
            opacity = 1;
        }
    }

    function onEnded() {
        if (!loop || !video) return;
        restartTimeout = setTimeout(() => {
            if (!video) return;
            video.currentTime = 0;
            video.play().catch(() => {});
        }, fadeDuration * 1000);
    }

    function onScroll() {
        if (!maxScroll || !video) {
            return;
        }

        if (window.scrollY > maxScroll && !video.paused) {
            video.pause();
        } else if (window.scrollY <= maxScroll && video.paused && !video.ended && !restartTimeout) {
            video.play().catch(() => {});
        }
    }
</script>

<svelte:head>
    {#if poster}
        <link rel="preload" as="image" href={poster} fetchpriority="high" />
    {/if}
</svelte:head>

<svelte:window
    onscroll={onScroll}
    bind:scrollY
    bind:innerWidth
/>

<div class={['fixed top-0 h-screen w-screen overflow-hidden', className].join(' ')}>
    <div
        class="absolute top-0 left-0 w-screen overflow-hidden"
        style:height={`${boxHeight}px`}
        style:transform={`translate(${leftOffset}, ${topOffset}) translateY(${vParallaxAmount}px)`}
    >
        {#if enabled}
            <video
                bind:this={video}
                class="absolute inset-0 w-full h-full object-cover pointer-events-none"
                {src}
                muted
                playsinline
                disablepictureinpicture
                preload="auto"
                loop={loop && !fadeOnLoop}
                aria-hidden="true"
                tabindex="-1"
                onplaying={() => { clearTimeout(restartTimeout); restartTimeout = undefined; opacity = 0; }}
                ontimeupdate={onTimeUpdate}
                onended={onEnded}
            ></video>
        {/if}
        <div
            class='absolute inset-0 bg-cover bg-center'
            style:background-image={poster ? `url('${poster}')` : undefined}
            style:opacity
            style:transition={`opacity ${fadeDuration}s`}
        ></div>
    </div>
</div>
<div class="relative" bind:this={contentElem}>
    {@render children?.()}
</div>
