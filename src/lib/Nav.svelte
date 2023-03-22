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

    let dd: boolean;

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
            {#if navItem.dropdown}
            <!-- svelte-ignore a11y-mouse-events-have-key-events -->
            <li class="flex flex-col -mt-1 transition items-center">
                <a
                    on:mouseenter={() => dd = true}
                    class="navlink hv:hover:text-brand"
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
                    class="h-0.5 w-0 -mt-0.5 bg-[currentColor] transition-all"
                    class:w-full={$page.url.pathname === navItem.pathname && (!navItem.scrollTo || $section === navItem.scrollTo)}
                />
                <div on:mouseleave={() => dd = false} class="transition-all enabled:hover:bg-white/25 {dd ? "w-40 h-48 flex flex-col justify-center items-center bg-storm z-40 gap-2" : "collapse"}">
                    {#each navItem.dropdown as navItem}
                    <li class="{dd ? "" : "collapse"} flex flex-col -mt-1 transition hv:hover:text-brand items-center">
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
                            class="h-0.5 w-0 -mt-0.5 bg-[currentColor] transition-all"
                            class:w-full={$page.url.pathname === navItem.pathname && (!navItem.scrollTo || $section === navItem.scrollTo)}
                        />
                    </li>
                    {/each}
                </div>
            </li>
            {:else if !navItem.dropdown}
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
                    class="h-0.5 w-0 -mt-0.5 bg-[currentColor] transition-all"
                    class:w-full={$page.url.pathname === navItem.pathname && (!navItem.scrollTo || $section === navItem.scrollTo)}
                />
            </li>
            {/if}
        {/each}
    </ul>
</nav>