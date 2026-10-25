<script lang="ts">
    import YouTubePlayer, { type PlayerObject } from 'youtube-player';
    import { onDestroy, onMount, type Snippet } from 'svelte';

    interface Props {
        poster?: string | undefined;
        leftOffset?: number | string;
        topOffset?: number | string;
        minHeight?: number;
        maxScroll?: number;
        fadeDuration?: number;
        playDelay?: number;
        fadeOnLoop?: boolean;
        verticalParallax?: number;
        loop?: boolean;
        videoId: string;
        downSample?: number;
        deferLoad?: boolean;
        class?: string | undefined;
        children?: Snippet;
    }

    let {
        poster = undefined,
        leftOffset = 0,
        topOffset = 0,
        minHeight = 0,
        maxScroll = 0,
        fadeDuration = 2,
        playDelay = 0,
        fadeOnLoop = false,
        verticalParallax = 0,
        loop = false,
        videoId,
        downSample = 1,
        deferLoad = false,
        class: className = undefined,
        children
    }: Props = $props();

    let quality = $derived(Math.min(1, 1 / downSample));

    let opacity = $state(1);
    let playing = false;
    let mounted = $state(false);

    let player: PlayerObject | null = null;
    let iframe: HTMLIFrameElement | null = null;
    let playerElem: HTMLDivElement | undefined = $state();

    let innerWidth: number = $state(0);
    let scrollY: number = $state(0);

    let calculatedScaledHeight = $derived(Math.max((innerWidth * 0.5625) * quality, minHeight * quality) + 'px');
    let calculatedHeight = $derived(Math.max((innerWidth * 0.5625), minHeight) + 'px');
    let vParallaxAmount = $derived(verticalParallax ? (verticalParallax * (Math.min(scrollY, maxScroll) / maxScroll)) : 0);

    function restartVideo() {
        if (player) {
            opacity = 0;
            player.seekTo(0, true);
            player.playVideo();
        }
    }

    let timeout: ReturnType<typeof setTimeout> | 0 = 0;
    let interval: ReturnType<typeof setInterval>;

    onMount(() => {
        interval = setInterval(
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
                                    timeout = 0;
                                }, fadeDuration * 2000);
                            } else {
                                timeout = setTimeout(() => {
                                    restartVideo();
                                    timeout = 0;
                                }, 0.5);
                            }
                        } else {
                            opacity = 1;
                        }
                    }
                }
            }
        , 100);

        if (!deferLoad) {
            setMounted();
        }
    });

    onDestroy(() => {
        clearInterval(interval);
        if (timeout) clearTimeout(timeout);
        timeout = 0;
    });

    // Create the YouTube player once the delayed mount kicks in
    $effect(() => {
        if (!mounted || !playerElem) return;

        const ytPlayer = YouTubePlayer(playerElem, {
            videoId,
            playerVars: {
                disablekb: 1,
                controls: 0,
                fs: 0,
                modestbranding: 1,
            }
        });
        ytPlayer.on('ready', () => ytPlayer.cueVideoById(videoId));
        ytPlayer.on('stateChange', stateChange);

        return () => {
            ytPlayer.destroy();
            player = null;
            iframe = null;
        };
    });

    function stateChange(event: { target: PlayerObject, data?: number }) {
        const { data: state } = event;
        player = event.target;
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
            iframe.tabIndex = -1;
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

    function calculateParallax() {
        if (iframe) {
            iframe.style.transform = `translate(-50%, -50%) translate(${leftOffset}, ${topOffset}) translateY(${vParallaxAmount}px) scale(${downSample})`;
        }
    }

    function setMounted() {
        timeout = setTimeout(
            () => {
                mounted = true;
                timeout = 0;
            },
            playDelay * 1000
        )
    }

    function onLoadListener() {
        if (deferLoad) {
            setMounted();
        }
    }
</script>

<svelte:window
    onresize={onResize}
    onscroll={onScroll}
    onload={onLoadListener}
    bind:scrollY
    bind:innerWidth
/>

<div class={['fixed top-0 h-screen w-screen overflow-hidden', className].join(' ')}>
    <div class='w-full h-full'>
        {#if mounted}
            <div class="w-full h-full relative">
                <div bind:this={playerElem}></div>
            </div>
        {/if}
        <div
            class='w-screen absolute top-0 bg-cover bg-center'
            style:height={calculatedHeight}
            style:background-image={poster ? `url('${poster}')` : undefined}
            style:filter={`opacity(${opacity})`}
            style:transition={`filter ${fadeDuration}s`}
            style:transform={`translate(${leftOffset}, ${topOffset}) translateY(${vParallaxAmount}px)`}
        ></div>
    </div>
</div>
<div class="relative">
    {@render children?.()}
</div>
