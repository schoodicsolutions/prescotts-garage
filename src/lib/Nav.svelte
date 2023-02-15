<script lang="ts">
    import type { NavItem } from '$types/NavItem';
    import { page } from '$app/stores';
    export let ariaLabel: string;
    export let ariaHidden: boolean;
    export let navItems: NavItem[];

    let className: string | undefined = undefined;
    export { className as class };
</script>

<nav
    class='main-nav'
    aria-label={ariaLabel}
    aria-hidden={ariaHidden}
>
    <ul 
        class={["flex", className].join(' ')}
    >
        {#each navItems as navItem}
            <li class="flex flex-col mt-1">
                <a 
                    class="navlink"
                    href={navItem.pathname}
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