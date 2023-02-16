<script lang="ts">
    import { ALL_NAV_ITEMS, LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "../constants";
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";
    
	import MediaQuery from 'svelte-media-queries';

    let scrollY: number;

    $: floatingNavVisible = scrollY > 160;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={'(max-width: 1600px)'} let:matches>
    <header class="shadow-xl bg-midnight min-h-40 py-8 flex-col items-center z-50 absolute w-full">
        <div class="flex gap-16 items-center justify-center">

                {#if !matches}
                <Nav
                    class="justify-around w-[640px] text-white"
                    navItems={LEFT_NAV_ITEMS}
                    ariaLabel='Left Main Nav' 
                />
                {/if}
                <Logo class="w-36" />
                {#if !matches}
                <Nav
                    class="justify-around w-[640px] text-white"
                    navItems={RIGHT_NAV_ITEMS}
                    ariaLabel='Right Main Nav' 
                />
                {/if}
        </div>
        {#if matches}
            <Nav
                class="gap-x-12 gap-y-4 pt-8 px-8 text-white flex-wrap items-center justify-center"
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav' 
            />
        {/if}
            <Nav
                class={[
                    'fixed gap-x-12 gap-y-4 py-5 px-8 top-0 w-full text-white bg-midnight flex-wrap items-center justify-center z-50 transition-transform',
                    floatingNavVisible ? '' : '-translate-y-full',
                ].join(' ')}
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav'
                ariaHidden={!floatingNavVisible}
            />
    </header>
</MediaQuery>