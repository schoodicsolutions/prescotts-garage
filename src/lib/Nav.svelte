<script lang="ts">
    import type { NavItem } from '#types/NavItem';
    import { page } from '$app/state';
    import { scrollTo, section } from 'svelte-scroll-nav';

    interface Props {
        ariaLabel: string;
        ariaHidden?: boolean | undefined;
        navItems: NavItem[];
        class?: string | undefined;
        onnavigate?: (navItem: NavItem) => void;
    }

    let {
        ariaLabel,
        ariaHidden = undefined,
        navItems,
        class: className = undefined,
        onnavigate
    }: Props = $props();
</script>

<nav
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
>
    <ul
        class={className}
    >
        {#each navItems as navItem}
            {#if navItem.dropdown}
                <li class="flex flex-col -mt-1 transition items-center">
                    <a
                        class="navlink hv:hover:text-brand"
                        href={navItem.pathname}
                        use:scrollTo={navItem.scrollTo ? {
                            section: navItem.scrollTo,
                            onNavigate: () => onnavigate?.(navItem),
                        } : undefined}
                    >
                    <p class="navlink hv:hover:text-brand flex flex-row items-center justify-center gap-1">{navItem.label}</p>
                    </a>
                </li>
            {:else}
            <li class="flex flex-col -mt-1 transition hv:hover:text-brand items-center">
                <a
                    class="navlink"
                    href={navItem.pathname}
                    use:scrollTo={navItem.scrollTo ? {
                        section: navItem.scrollTo,
                        onNavigate: () => onnavigate?.(navItem),
                    } : undefined}
                >
                    {navItem.label}
                </a>
                <div
                    class="h-0.5 w-0 -mt-0.5 bg-[currentColor] transition-all"
                    class:w-full={page.url.pathname === navItem.pathname && (!navItem.scrollTo || $section === navItem.scrollTo)}
                ></div>
            </li>
            {/if}
        {/each}
    </ul>
</nav>
