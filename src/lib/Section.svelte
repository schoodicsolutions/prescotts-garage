<script lang="ts">
    import { scrollRef } from "svelte-scroll-nav";
    import Image from "./Image.svelte";

    interface Props {
        image?: {
            src: string;
            alt: string;
        } | undefined;
        eyebrow?: string | undefined;
        heading?: string | undefined;
        headingOnSide?: boolean;
        wide?: boolean;
        class?: null | string;
        scrollRef?: string | undefined;
        children?: import('svelte').Snippet;
    }

    let {
        image = undefined,
        eyebrow = undefined,
        heading = undefined,
        headingOnSide = false,
        wide = false,
        class: clazz = null,
        scrollRef: scrollRefName = undefined,
        children
    }: Props = $props();
</script>

<section use:scrollRef={scrollRefName} class="section {clazz ?? ''}">
    <div class="flex w-full flex-col lg:flex-row gap-12 lg:gap-20 {wide ? 'max-w-screen-xl' : 'max-w-screen-lg'} items-center justify-center">
        {#if image}
            <div class="section-image">
                <Image src={image.src} alt={image.alt} aspect="371:491" />
            </div>
        {/if}
        <div class="flex w-full flex-col gap-8">
            {#if heading}
                <div class="flex flex-col gap-3 {headingOnSide ? 'text-left' : 'text-center'}">
                    {#if eyebrow}
                        <p class="eyebrow">{eyebrow}</p>
                    {/if}
                    <h2 class="section-heading">{heading}</h2>
                </div>
            {/if}
            <div class="flex flex-col gap-8">
                {@render children?.()}
            </div>
        </div>
    </div>
</section>
