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
    <ul class={className}>
        {#each navItems as navItem}
            {@const active = page.url.pathname === navItem.pathname && (!navItem.scrollTo || $section === navItem.scrollTo)}
            <li class="flex flex-col transition-colors hv:hover:text-brand items-center">
                <a
                    class="navlink py-1"
                    class:text-brand={active}
                    aria-current={active ? 'location' : undefined}
                    href={navItem.pathname}
                    use:scrollTo={navItem.scrollTo ? {
                        section: navItem.scrollTo,
                        onNavigate: () => onnavigate?.(navItem),
                    } : undefined}
                >
                    {navItem.label}
                </a>
                <div
                    class="h-0.5 w-0 rounded-full bg-brand transition-all"
                    class:w-full={active}
                ></div>
            </li>
        {/each}
    </ul>
</nav>
