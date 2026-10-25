<script lang="ts">
    import { scrollRef } from "svelte-scroll-nav";
    import Image from "./Image.svelte";




    

    interface Props {
        image?: {
        src: string;
        alt: string;
        // height: string | number;
    } | undefined;
        heading?: string | undefined;
        headingOnSide?: boolean;
        wide?: boolean;
        class?: null | string;
        scrollRef?: string | undefined;
        children?: import('svelte').Snippet;
    }

    let {
        image = undefined,
        heading = undefined,
        headingOnSide = false,
        wide = false,
        class: clazz = null,
        scrollRef: scrollRefName = undefined,
        children
    }: Props = $props();
    
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
                {@render children?.()}
            </div>
        </div>
    </div>
</section>