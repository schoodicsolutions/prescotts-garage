<script lang="ts">
    import YouTube, { type PlayerObject } from 'svelte-youtube';
    import { onDestroy } from 'svelte';

    function onInterval(callback: () => void, milliseconds: number) {
        const interval = setInterval(callback, milliseconds);

        onDestroy(() => {
            clearInterval(interval);
        });
    }

    $: opacity = 0;

    let player: PlayerObject | null = null;
    $: player;

    onInterval(() => {
        if (player) {
            const secondsLeft = player.getDuration() - player.getCurrentTime();
            console.log(secondsLeft);
            if (secondsLeft <= 3) {
                opacity = 0;
            }
        }
    }, 500);

    function blur() {
        if (player) {
            player.pauseVideo();
        }
    }

    function focus() {
        if (player) {
            player.playVideo();
        }
    }
</script>

<svelte:window on:blur={blur} on:focus={focus}/>

<div class='bg-shop w-screen h-screen fixed top-0'>
    <div class='w-screen overflow-hidden transition-opacity delay-[2000ms]' style:opacity>  
        <YouTube
        videoId="ZOOQ4O7LsBg"
        class="w-[200vw] h-[calc(100vh+160px)] -translate-x-1/4"
        options={{
            playerVars: {
                disablekb: 1,
                controls: 0,
                fs: 0,
                loop: 1,
                rel: 0,
                playlist: 'ZOOQ4O7LsBg',
                modestbranding: 1,
            }
        }}
        on:stateChange={(event) => {
            const { data: state } = event.detail;

            console.log(state);

            if (state === 5 || state === 0) {
                player = null;
                setTimeout(() => {
                    player = event.detail.target;
                    opacity = 1;
                    player.mute();
                    player.playVideo();
                }, state ? 0 : 2000)
            } else if (state === 1) {
                player = event.detail.target;
                player.getIframe().classList.add('w-full', 'h-[calc(100vh+160px)]');
            } else if (state === 2) {
                player = event.detail.target;
            } else {
                player = null;
            }
        }}
        />
        <div class='w-full h-full absolute z-50 top-0' />
    </div>
</div>