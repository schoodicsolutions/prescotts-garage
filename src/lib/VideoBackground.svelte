<script lang="ts">
    export let poster: string = '#000000';
    export let leftOffset: number = 0;
    export let topOffset: number = 0;
    export let minHeight: number = 0;
    export let maxScroll: number = 0;
    export let videoId: string;

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
            // Poor man's loop
            if (player) {
                const aboutToEnd = (player.getDuration() - player.getCurrentTime()) <= 1;
                if (aboutToEnd) {
                    player.seekTo(1, true);
                    player.playVideo();
                }
            }
        }
    , 500);

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
            iframe.style.transform = 'translate(-50%, -50%)';
            iframe.style.position = 'absolute';
            iframe.style.left = iframe.parentElement?.clientWidth ? (iframe.parentElement?.clientWidth / 2 + leftOffset) + 'px' : '50%';
            iframe.style.top = iframe.parentElement?.clientHeight ? (iframe.parentElement?.clientHeight / 2 + topOffset) + 'px' : '50%';
            iframe.style.width = '150vw';
            iframe.style.minWidth = '2000px';
            iframe.style.height = Math.max(window.innerWidth * 0.5625, minHeight) + 'px';
            console.log(iframe.style.height)
        }
    }

    function onScroll() {
        if (!maxScroll || !player) {
            return;
        }

        if (window.scrollY > maxScroll && playing) {
            player.pauseVideo();
            playing = false;
        } else if (window.scrollY <= maxScroll && !playing) {
            player.playVideo();
            playing = true;
        }
    }
</script>

<svelte:window on:resize={onResize} on:scroll|passive={onScroll}/>

<div class='fixed top-0 h-screen w-screen overflow-hidden' style:background={poster}>
    <div class='w-full h-full' style:opacity style='transition: opacity 2s;'>  
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