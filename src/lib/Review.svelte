<script lang="ts">
    interface Props {
        rating?: number;
        author?: string;
        children?: import('svelte').Snippet;
    }

    let { rating = 0, author = '', children }: Props = $props();

    let ratingToFixed = $derived(rating.toFixed(1));
    let solidStars = $derived('★'.repeat(Math.min(5, rating)));
    let emptyStars = $derived('✩'.repeat(5 - rating));
</script>

<div class="flex-1 flex flex-col justify-between h-full max-w-sm">

    <div class="text-center flex items-center justify-center">
        <span class="text-yellow-200 text-2xl text-center">{ solidStars }</span>
        <span class="text-gray-700 text-2xl text-center">{ emptyStars }</span>
        <span class="text-sm">&nbsp;( { ratingToFixed } )</span>
    </div>

    <div class="flex gap-2 my-4 -ml-4">
        <div class="flex flex-col text-brand justify-center items-center">
            <div class="w-0.5 bg-[currentColor] grow"></div>
            <span class="text-4xl -mt-5 mb-1">&bdquo;</span>
            <div class="w-0.5 bg-[currentColor] grow"></div>
        </div>
        <blockquote class="text-justify text-md md:text-lg">
            {@render children?.()}
        </blockquote>
    </div>


    <cite class="w-full block text-right font-medium text-lg md:text-xl">&mdash; { author }</cite>

</div>