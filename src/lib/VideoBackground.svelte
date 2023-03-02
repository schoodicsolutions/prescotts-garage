<script lang="ts">
    export let poster: string | undefined = undefined;
    export let leftOffset: number | string = 0;
    export let topOffset: number | string = 0;
    export let minHeight: number = 0;
    export let maxScroll: number = 0;
    export let fadeDuration: number = 2;
    export let fadeOnLoop: boolean = false;
    export let verticalParallax = 0;
    export let loop: boolean = false;
    export let videoId: string;
    export let downSample: number = 1;

    $: quality = Math.min(1, 1 / downSample);

    let className: string | undefined;
    export { className as class };
    
    import YouTube, { type PlayerObject } from 'svelte-youtube';
    import { onDestroy, onMount } from 'svelte';

    $: opacity = 1;
    
    $: playing = false;

    let player: PlayerObject | null = null;
    $: player;

    let iframe: HTMLIFrameElement | null = null;
    $: iframe;
    
    let innerHeight: number;
    let innerWidth: number;

    $: calculatedScaledHeight = Math.max((innerWidth * 0.5625) * quality, minHeight * quality) + 'px';
    $: calculatedHeight = Math.max((innerWidth * 0.5625), minHeight) + 'px';

    function restartVideo() {
        if (player) {
            opacity = 0;
            player.seekTo(0, true);
            player.playVideo();
        }
    }

    let timeout: NodeJS.Timeout | number;

    const interval = setInterval(
        () => {
            // Poor man's loop / fade-out
            if (!timeout && player) {
                const endstop = loop && !fadeOnLoop ? 1 : fadeDuration;
                const aboutToEnd = (player.getDuration() - player.getCurrentTime()) <= endstop;
                if (aboutToEnd) {
                    if (loop) {
                        if (fadeOnLoop) {
                            opacity = 1;
                            timeout = setTimeout(() => {
                                restartVideo();
                                clearTimeout(timeout);
                            }, fadeDuration * 2000);
                        } else {
                            timeout = setTimeout(() => {
                                restartVideo();
                                clearTimeout(timeout);
                            }, 0.5);
                        }
                    } else {
                        opacity = 1;
                    }
                }
            }
        }
    , 100);

    onDestroy(() => clearInterval(interval));

    function stateChange(event: CustomEvent<{target: PlayerObject, data?: number}>) {
        const { data: state } = event.detail;
        console.log(state);
        player = event.detail.target;
        iframe = player.getIframe();
        if (state === -1) {
            onResize();
        } else if (state === 5) {
            player.mute();
            player.playVideo();
            playing = true;
        } else if (state === 1) {
            opacity = 0;
        }
    }

    function onResize() {
        if (iframe) {
            iframe.style.position = 'absolute';
            iframe.style.left = '50%';
            iframe.style.top = '50%';
            iframe.style.width = '200vw';
            iframe.style.minWidth = (2000 * quality) + 'px';
            iframe.style.height = calculatedScaledHeight;
            iframe.style.transformOrigin = '50% 50%';
            calculateParallax();
        }
    }

    function onScroll() {
        if (!maxScroll || !player) {
            return;
        }

        if (window.scrollY <= maxScroll) {
            calculateParallax();
        }

        if (window.scrollY > maxScroll && playing) {
            player.pauseVideo();
            playing = false;
        } else if (window.scrollY <= maxScroll && !playing) {
            player.playVideo();
            playing = true;
        }
    }

    let scrollY: number;
    $: vParallaxAmount = verticalParallax ? (verticalParallax * (Math.min(scrollY, maxScroll) / maxScroll)) : 0;

    function calculateParallax() {
        if (iframe) {
            iframe.style.transform = `translate(-50%, -50%) translate(${leftOffset}, ${topOffset}) translateY(${vParallaxAmount}px) scale(${downSample})`;
        }
    }

    $: mounted = false;
    onMount(() => {
        mounted = true;
    })
</script>

<svelte:window 
    on:resize={onResize}
    on:scroll|passive={onScroll}
    bind:scrollY
    bind:innerHeight
    bind:innerWidth
/>

<div class={['fixed top-0 h-screen w-screen overflow-hidden', className].join(' ')}>
    <div class='w-full h-full'>  
        {#if mounted}
            <YouTube
                {videoId}
                class="w-full h-full relative"
                options={{
                    playerVars: {
                        disablekb: 1,
                        controls: 0,
                        fs: 0,
                        modestbranding: 1,
                    }
                }}
                on:stateChange={stateChange}
            />
        {/if}
        <div
            class='w-screen absolute top-0 bg-cover bg-center'
            style:height={calculatedHeight}
            style:background-image={poster ? `url('${poster}')` : undefined}
            style:filter={`opacity(${opacity})`}
            style:transition={`filter ${fadeDuration}s`}
            style:transform={`translate(${leftOffset}, ${topOffset}) translateY(${vParallaxAmount}px)`}
        />
    </div>
</div>
<div class="relative">
    <slot />
</div>