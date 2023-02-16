<script>
  import VideoBackground from "$lib/VideoBackground.svelte";
  const sections = Array(20).fill(null).map((_, i) => i);
</script>

<VideoBackground poster="url('/bg-placeholder.jpg')">
    <div class="flex h-[500px] justify-center items-center flex-col gap-12">
        <h1 class="text-white font-kameron text-7xl font-bold text-center drop-shadow-hero">
            We're Your #1 For<br />
            Auto Repair In The<br/>
            Machias Bay Area<br/>
        </h1>

        <h2 class="text-white font-kameron text-5xl font-normal text-center drop-shadow-hero">What Can We Do For You?</h2>
    </div>
    {#each sections as section}
        <section class="flex flex-col py-12 justify-center items-center text-white" class:bg-midnight={section % 2 === 0} class:bg-storm={section % 2}>
            <h2 class=" font-kameron text-5xl font-bold text-center drop-shadow-hero">
                Section Title
            </h2>
            <p class="px-96">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </section>
    {/each}

</VideoBackground>