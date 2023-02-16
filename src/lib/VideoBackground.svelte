<script lang="ts">
    export let poster: string = '#000000';

    import YouTube, { type PlayerObject } from 'svelte-youtube';
    import { onDestroy } from 'svelte';

    $: opacity = 0;
    
    let player: PlayerObject | null = null;
    $: player;
    $: iframe = player ? player.getIframe() : null;

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

        if (state === -1) {
            if (iframe) {
                iframe.style.width = '200vw';
                iframe.style.height = 'calc(100vw * 0.5625)';
                iframe.style.transform = 'translate(-50%, -50%)';
                iframe.style.position = 'absolute';
                iframe.style.left = '50%';
                iframe.style.top = '50%';
            }
        } else if (state === 5) {
            player.mute();
            player.playVideo();
        } else if (state === 1) {
            opacity = 1;
        }
    }

    function onResize(event: UIEvent & {
        currentTarget: EventTarget & Window;
    }) {
        if (iframe) {
            if (event.currentTarget.innerWidth < 1024) {
                iframe.style.height = 'calc(100vh / 0.5625)';
            } else {
                iframe.style.height = 'calc(100vw * 0.5625)';
            }
        }
    }
</script>

<svelte:window on:resize={onResize} />

<div class='fixed top-0 h-[800px]' style:background={poster}>
    <div class='w-screen h-screen overflow-hidden' style:opacity style='transition: opacity 2s;'>  
        <YouTube
        videoId="ZOOQ4O7LsBg"
        class="w-full h-full"
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