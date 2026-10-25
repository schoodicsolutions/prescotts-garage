<script lang="ts">
    import type { Snippet } from "svelte";
    import { scrollTo } from "svelte-scroll-nav";
    import Image from "./Image.svelte";
    import PageBanner from "./PageBanner.svelte";

    interface Props {
        title: string;
        banner: string;
        image: { src: string; alt: string };
        children: Snippet;
    }

    let { title, banner, image, children }: Props = $props();
</script>

<PageBanner {title} image={banner} />

<div class="mx-auto grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 px-5 sm:px-8 py-16">
    <div class="flex flex-col gap-5 text-lg leading-relaxed text-white/85">
        {@render children()}
        <a class="button button-brand w-full sm:w-fit mt-4" use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
    </div>
    <div class="md:sticky md:top-24 md:self-start">
        <Image src={image.src} alt={image.alt} aspect="4:5" />
    </div>
</div>
