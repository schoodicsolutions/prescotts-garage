<script lang="ts">
    import type { NavItem } from '$types/NavItem';
    import { page } from '$app/stores';
    import { scrollTo, section } from 'svelte-scroll-nav';
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
            <li class="flex flex-col -mt-1 transition hv:hover:text-brand items-center">
                <a
                    class="navlink"
                    href={navItem.pathname}
                    use:scrollTo={navItem.scrollTo ? {
                        section: navItem.scrollTo,
                        onNavigate: () => {
                            dispatch('navigate', navItem)
                        },
                    } : undefined}
                >
                    {navItem.label}
                </a>
                <div 
                    class="h-0.5 w-full -mt-0.5 bg-[currentColor] transition-all"
                    class:w-0={$page.url.pathname !== navItem.pathname || $section !== navItem.scrollTo}
                />
            </li>
        {/each}
    </ul>
</nav>