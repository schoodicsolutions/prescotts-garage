<script lang="ts">
    import { ALL_NAV_ITEMS, LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "../constants";
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";
    
	import MediaQuery from 'svelte-media-queries';
    import { slide } from "svelte/transition";
  import MenuIcon from "./icons/MenuIcon.svelte";

    let scrollY: number;

    $: floatingNavVisible = scrollY > 160;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={['(min-width: 1600px)', '(max-width: 1600px) and (min-width: 640px)', '(max-width: 640px)']} let:matchesArray={[xxl, between, sm]}>
    <header class="shadow-xl bg-midnight min-h-20 sm:min-h-40 py-4 sm:py-8 flex-col items-center sticky top-0 sm:relative w-full z-50 text-white">
        <div class="flex gap-16 items-center justify-around sm:justify-center">
                {#if xxl}
                <Nav
                    class="justify-around w-[640px]"
                    navItems={LEFT_NAV_ITEMS}
                    ariaLabel='Left Main Nav' 
                />
                {:else if sm}
                    <div class="w-8"/>
                {/if}
                <Logo class="w-20 sm:w-36 shrink-0" />
                {#if xxl}
                <Nav
                    class="justify-around w-[640px] text-white"
                    navItems={RIGHT_NAV_ITEMS}
                    ariaLabel='Right Main Nav' 
                />
                {:else if sm}
                    <div class="w-8">
                        <MenuIcon />
                    </div>
                {/if}
        </div>
        {#if between}
            <Nav
                class="gap-x-12 gap-y-4 pt-8 px-8 text-white flex-wrap items-center justify-center"
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav' 
            />
        {/if}
    </header>
    {#if !sm && floatingNavVisible}
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