<script lang="ts">
    import { ALL_NAV_ITEMS, LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "../constants";
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";
    
	import MediaQuery from 'svelte-media-queries';
    import { slide } from "svelte/transition";

    let scrollY: number;

    $: floatingNavVisible = scrollY > 160;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={'(max-width: 1600px)'} let:matches>
    <header class="shadow-xl bg-midnight min-h-40 py-8 flex-col items-center relative w-full z-50">
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
    </header>
    {#if floatingNavVisible}
        <div
            in:slide={{duration: 200}}
            out:slide={{duration: 200}}
            class="py-5 px-8 fixed bg-midnight z-50 w-full top-0"
        >
            <Nav
                class="gap-x-12 gap-y-4 text-white flex-wrap items-center justify-center "
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav'
            />
        </div>
    {/if}
</MediaQuery>