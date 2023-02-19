<script lang="ts">
  import VideoBackground from "$lib/VideoBackground.svelte";
  import MediaQuery from "svelte-media-queries";
  import { scrollRef } from "svelte-scroll-nav";
  const sections = ['about', 'portfolio', 'testimonials', 'contact', 'customs', 'alignments', 'rust', 'maintenance', 'diagnostics']

  let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={['(min-width: 1600px)', '(max-width: 640px)']} let:matchesArray={[sm, xxl]}>
    <VideoBackground
        videoId="ZOOQ4O7LsBg"
        poster="/bg-placeholder.jpg"
        loop={true}
        minHeight={sm ? 500 : 800}
        maxScroll={1200}
        topOffset={(sm || xxl ? -160 : 0)}
        verticalParallax={200}
        downSample={1}
        class="brightness-75"
    >
        <div class="flex h-[400px] sm:h-[500px] sm:max-h-[500px] overflow-hidden justify-center items-center flex-col gap-6 px-4 sm:px-8">
            <h1 class="text-white font-kameron text-4xl sm:text-5xl lg:text-7xl font-bold text-center drop-shadow-hero">
                We're Your #1 For<br />
                Auto Repair In The<br/>
                Machias Bay Area<br/>
            </h1>
            <button class="button button-brand">Learn What We Do</button>
        </div>
        {#each sections as section, i}
            <section class="flex flex-col py-12 px-12 justify-center items-center text-white" class:bg-midnight={i % 2 === 0} class:bg-storm={i % 2} use:scrollRef={section}>
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