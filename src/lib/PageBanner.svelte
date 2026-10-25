<script lang="ts">
    import { scrollTo } from "svelte-scroll-nav";

    interface Props {
        title: string;
        image: string;
    }

    let { title, image }: Props = $props();
</script>

<div class="relative isolate flex min-h-[260px] sm:min-h-[340px] items-end overflow-hidden">
    <img src={image} alt="" class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50" />
    <div aria-hidden="true" class="absolute inset-0 -z-10 bg-gradient-to-t from-midnight via-midnight/30 to-transparent"></div>
    <div class="mx-auto flex w-full max-w-screen-xl flex-col gap-3 px-5 sm:px-8 pb-10">
        <a class="eyebrow w-fit !text-white/80 hv:hover:!text-white transition-colors drop-shadow-hero" href="/" use:scrollTo={{section: "services"}}>&larr; All Services</a>
        <h1 class="font-kameron text-5xl lg:text-7xl font-bold text-white drop-shadow-hero">{title}</h1>
    </div>
</div>
