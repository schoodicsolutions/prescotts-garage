<script lang="ts">
    interface Props {
        rating?: number;
        author?: string;
        children?: import('svelte').Snippet;
    }

    let { rating = 0, author = '', children }: Props = $props();

    let ratingToFixed = $derived(rating.toFixed(1));
    let solidStars = $derived('★'.repeat(Math.min(5, rating)));
    let emptyStars = $derived('☆'.repeat(Math.max(0, 5 - rating)));
</script>

<figure class="card relative flex flex-col gap-6 p-8 pt-10 h-full">
    <span aria-hidden="true" class="absolute -top-6 left-8 font-kameron text-7xl leading-none text-brand">&ldquo;</span>

    <div class="flex items-center gap-2" aria-label="Rated {ratingToFixed} out of 5">
        <span aria-hidden="true" class="text-yellow-300 text-xl tracking-wider">{solidStars}<span class="text-white/20">{emptyStars}</span></span>
        <span aria-hidden="true" class="text-sm text-white/60">{ratingToFixed}</span>
    </div>

    <blockquote class="text-lg leading-relaxed text-white/90">
        {@render children?.()}
    </blockquote>

    <figcaption class="mt-auto flex items-center gap-3 border-t border-white/10 pt-5">
        <span aria-hidden="true" class="grid size-10 place-items-center rounded-full bg-brand/15 font-poppins font-semibold text-brand">{author.charAt(0)}</span>
        <cite class="not-italic font-semibold text-lg">{author}</cite>
    </figcaption>
</figure>
