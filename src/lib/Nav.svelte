<script lang="ts">
    import type { NavItem } from '$types/NavItem';
    import { page } from '$app/stores';
    export let ariaLabel: string;
    export let navItems: NavItem[];
</script>

<nav 
    aria-label={ariaLabel}
>
    <ul 
        class="flex gap-8 font-semibold" 
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