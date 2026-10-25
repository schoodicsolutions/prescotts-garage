<script lang="ts">
    import { HOURS } from "#constants";
    import { onMount } from "svelte";

    // The page is prerendered, so "today" can only be known in the browser
    let today: number | undefined = $state();
    let openNow: boolean | undefined = $state();

    function formatHour(hour: number) {
        return `${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`;
    }

    onMount(() => {
        const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' }));
        const { open, close } = HOURS[now.getDay()];
        const hour = now.getHours() + now.getMinutes() / 60;
        today = now.getDay();
        openNow = open !== undefined && close !== undefined && hour >= open && hour < close;
    });
</script>

<div class="card p-6">
    <div class="flex items-center justify-between gap-4">
        <h3 class="font-poppins text-lg font-semibold">Hours of Operation</h3>
        {#if openNow !== undefined}
            <span class="inline-flex shrink-0 whitespace-nowrap items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold {openNow ? 'bg-green-500/15 text-green-400' : 'bg-white/10 text-white/70'}">
                <span class="size-2 rounded-full {openNow ? 'bg-green-400' : 'bg-white/50'}"></span>
                {openNow ? 'Open now' : 'Closed now'}
            </span>
        {/if}
    </div>
    <dl class="mt-4 grid grid-cols-2 text-left">
        {#each HOURS as { day, open, close }, index}
            <dt class="py-2 font-bold border-t border-white/10 {index === today ? 'text-brand' : ''}">{day}</dt>
            <dd class="py-2 font-medium border-t border-white/10 text-right {index === today ? 'text-brand' : open === undefined ? 'text-white/50' : ''}">
                {#if open !== undefined && close !== undefined}
                    {formatHour(open)} &ndash; {formatHour(close)}
                {:else}
                    Closed
                {/if}
            </dd>
        {/each}
    </dl>
</div>
