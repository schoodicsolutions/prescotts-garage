<script lang="ts">
    import { Menu, MenuButton, MenuItems, MenuItem, Transition } from "@rgossiaux/svelte-headlessui";
    import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";
    import type { NavItem } from '$types/NavItem';
    import { page } from '$app/stores';
    import { scrollTo, section } from 'svelte-scroll-nav';
    import { createEventDispatcher } from 'svelte';
    export let ariaLabel: string;
    export let ariaHidden: boolean | undefined = undefined;
    export let navItems: NavItem[];

    let className: string | undefined = undefined;

    const dispatch = createEventDispatcher();

    let openMenu: boolean = true;

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
                <Menu class="flex flex-col -mt-1 transition items-center">

                    <a
                        class="navlink hv:hover:text-brand"
                        href={navItem.pathname}
                        use:scrollTo={navItem.scrollTo ? {
                            section: navItem.scrollTo,
                            onNavigate: () => {
                                dispatch('navigate', navItem)
                            },
                        } : undefined}
                    >
                    <p class="navlink hv:hover:text-brand flex flex-row items-center justify-center gap-1">{navItem.label}</p>
                    </a>
                    <MenuItems class="enabled:hover:bg-white/25 w-36 h-48 flex flex-col justify-center items-center bg-storm z-40 gap-2">
                        {#each navItem.dropdown as dropItem}
                        <MenuItem let:active class="flex flex-col -mt-1 transition hv:hover:text-brand items-center">
                            <a
                                class="navlink text-smb-mid"
                                href={dropItem.pathname}
                                use:scrollTo={dropItem.scrollTo ? {
                                    section: dropItem.scrollTo,
                                    onNavigate: () => {
                                        dispatch('navigate', dropItem)
                                    },
                                } : undefined}
                            >
                                {dropItem.label}
                            </a>
                        </MenuItem>
                        {/each}
                    </MenuItems>
                </Menu>
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