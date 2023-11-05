<script lang="ts">
    import { scrollRef } from "svelte-scroll-nav";
    import Image from "./Image.svelte";

    export let image: {
        src: string;
        alt: string;
        // height: string | number;
    } | undefined = undefined;

    export let heading: string | undefined = undefined;
    export let headingOnSide: boolean = false;

    export let wide: boolean = false;

    let clazz: null | string = null;
    export { clazz as class };

    let scrollRefName: string | undefined = undefined;
    export { scrollRefName as scrollRef };
</script>

<section use:scrollRef={scrollRefName} class="section {clazz}">
    <div class="flex flex-col lg:flex-row gap-24 {wide ? 'max-w-screen-2xl' : 'max-w-screen-lg'} items-center justify-center">
        {#if image}
            <div class="section-image">
                <Image src={image.src} alt={image.alt} aspect="371:491" width="95%" />
            </div>
        {/if}
        <div class="flex flex-col gap-8">
            {#if heading}
                <h2 class="font-poppins text-4xl sm:text-3xl lg:text-5xl font-bold {headingOnSide ? "text-left" : "text-center"}">
                    { heading }
                </h2>
            {/if}
            <div class="flex flex-col gap-8">
                <slot />
            </div>
        </div>
    </div>
</section>