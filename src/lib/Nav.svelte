<script lang="ts">
    import type { NavItem } from '$types/NavItem';
    import { page } from '$app/stores';
    import { createEventDispatcher } from 'svelte';
    export let ariaLabel: string;
    export let ariaHidden: boolean | undefined = undefined;
    export let navItems: NavItem[];

    let className: string | undefined = undefined;

    const dispatch = createEventDispatcher();

    export { className as class };
</script>

<nav
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
>
    <ul 
        class={className}
    >
        {#each navItems as navItem}
            <li class="flex flex-col mt-1 transition hover:text-brand">
                <a 
                    class="navlink"
                    href={navItem.pathname}
                    on:click={() => {
                        dispatch('navigate', navItem)
                    }}
                >
                    {navItem.label}
                </a>
                <div 
                    class="h-0.5 w-full -mt-0.5"
                    class:invisible={$page.url.pathname !== navItem.pathname}
                />
            </li>
        {/each}
    </ul>
</nav>