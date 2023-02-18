<script lang="ts">
    export let poster: string | undefined = undefined;
    export let leftOffset: number = 0;
    export let topOffset: number = 0;
    export let minHeight: number = 0;
    export let maxScroll: number = 0;
    export let fadeDuration: number = 2;
    export let verticalParallax = 0;
    export let loop: boolean = false;
    export let videoId: string;


    let className: string | undefined;
    export { className as class };
    
    import YouTube, { type PlayerObject } from 'svelte-youtube';
    import { onDestroy } from 'svelte';

    $: opacity = 0;
    
    $: playing = false;

    let player: PlayerObject | null = null;
    $: player;

    let iframe: HTMLIFrameElement | null = null;
    $: iframe;
    
    const interval = setInterval(
        () => {
            const endstop = loop ? 0.5 : fadeDuration;
            // Poor man's loop / fade-out
            if (player) {
                const aboutToEnd = (player.getDuration() - player.getCurrentTime()) <= endstop;
                if (aboutToEnd) {
                    if (loop) {
                        player.seekTo(0, true);
                        player.playVideo();
                    } else {
                        opacity = 0;
                    }
                }
            }
        }
    , 100);

    onDestroy(() => clearInterval(interval));

    function stateChange(event: CustomEvent<{target: PlayerObject, data?: number}>) {
        const { data: state } = event.detail;
        player = event.detail.target;
        iframe = player.getIframe();
        if (state === -1) {
            onResize();
        } else if (state === 5) {
            player.mute();
            player.playVideo();
            playing = true;
        } else if (state === 1) {
            opacity = 1;
        }
    }

    function onResize() {
        if (iframe) {
            iframe.style.position = 'absolute';
            iframe.style.left = '50%';
            iframe.style.top = '50%';
            calculateParallax();
            iframe.style.width = '150vw';
            iframe.style.minWidth = '2000px';
            iframe.style.height = Math.max(window.innerWidth * 0.5625, minHeight) + 'px';
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
            const offsetX = leftOffset /* - hParallaxAmount */
            const offsetY = topOffset - vParallaxAmount;
            iframe.style.transform = `translate(-50%, -50%) translate(${offsetX}px, ${offsetY}px)`;
        }
    }


</script>

<svelte:window on:resize={onResize} on:scroll|passive={onScroll} bind:scrollY />

<div class={['fixed top-0 h-screen w-screen overflow-hidden', className].join(' ')} style:background={poster ? `url('${poster}')` : undefined}>
    <div class='w-full h-full' style:opacity style={`transition: opacity ${fadeDuration}s;`}>  
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
        <div class='w-full h-full absolute z-50 top-0' />
    </div>
</div>
<div class="relative">
    <slot />
</div>