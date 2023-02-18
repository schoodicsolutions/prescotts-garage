<script>
  import VideoBackground from "$lib/VideoBackground.svelte";
  import MediaQuery from "svelte-media-queries";
  const sections = Array(20).fill(null).map((_, i) => i);
</script>

<MediaQuery query={['(min-width: 1600px)', '(max-width: 640px)']} let:matchesArray={[sm, xxl]}>
    <VideoBackground
        videoId="ZOOQ4O7LsBg"
        poster="url('/bg-placeholder.jpg')"
        loop={true}
        minHeight={sm ? 500 : 800}
        maxScroll={sm ? 460 : 660}
        topOffset={sm || xxl ? -160 : 0}
        class="brightness-75"
    >
        <div class="flex h-[400px] sm:h-[500px] sm:max-h-[500px] overflow-hidden justify-center items-center flex-col gap-12 px-4 sm:px-8">
            <h1 class="text-white font-kameron text-4xl sm:text-5xl lg:text-7xl font-bold text-center drop-shadow-hero">
                We're Your #1 For<br />
                Auto Repair In The<br/>
                Machias Bay Area<br/>
            </h1>
            <h2 class="text-white font-kameron text-xl lg:text-2xl xl:text-4xl font-bold text-center drop-shadow-hero">
                Trust Prescott's Garage for anything from an oil change to a six inch lift.
            </h2>
        </div>
        {#each sections as section}
            <section class="flex flex-col py-12 px-12 justify-center items-center text-white" class:bg-midnight={section % 2 === 0} class:bg-storm={section % 2}>
                <h2 class=" font-kameron text-5xl font-bold text-center drop-shadow-hero">
                    Section Title
                </h2>
                <p class="max-w-[500px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </section>
        {/each}

    </VideoBackground>
</MediaQuery>