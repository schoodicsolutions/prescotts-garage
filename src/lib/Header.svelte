<script lang="ts">
    import { ALL_NAV_ITEMS, LEFT_NAV_ITEMS, RIGHT_NAV_ITEMS } from "../constants";
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";
    
	import MediaQuery from 'svelte-media-queries';
    import { fade, slide } from "svelte/transition";
    import MenuIcon from "./icons/MenuIcon.svelte";

    let scrollY: number;

    $: floatingNavVisible = scrollY > 320;
    $: mobileNavVisible = false;

    function toggleMobileNav() {
        mobileNavVisible = !mobileNavVisible;
    }
</script>

<svelte:window bind:scrollY />
<svelte:head>
    {#if mobileNavVisible}
        <style>body { overflow: hidden }</style>
    {/if}
</svelte:head>

<MediaQuery query={['(min-width: 1600px)', '(max-width: 1599px) and (min-width: 641px)', '(max-width: 640px)']} let:matchesArray={[xxl, between, sm]}>
    <header class="main-header" aria-label="Main Header">
        <div class="flex gap-16 items-center justify-between sm:justify-center">
                {#if xxl}
                <Nav
                    class="flank-nav"
                    navItems={LEFT_NAV_ITEMS}
                    ariaLabel='Left Main Nav' 
                />
                {:else if sm}
                    <div class="w-16 h-12 pl-4"/>
                {/if}
                <a href="/" aria-label="Prescott's Garage">
                    <Logo class="w-20 sm:w-36 shrink-0 hover:text-white transition" />
                </a>
                {#if xxl}
                <Nav
                    class="flank-nav"
                    navItems={RIGHT_NAV_ITEMS}
                    ariaLabel='Right Main Nav' 
                />
                {:else if sm}
                    <div class="w-16 pr-4">
                        <button class="button button-icon" on:click={toggleMobileNav} aria-label="Toggle Navigation">
                            <MenuIcon />
                        </button>
                    </div>
                {/if}
        </div>
        {#if between}
            <Nav
                class="below-nav"
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav' 
            />
        {/if}
    </header>
    {#if !sm && floatingNavVisible}
        <header
            in:slide={{duration: 200}}
            out:slide={{duration: 200}}
            aria-label="Floating Header"
            class="floating-header"
        >
            <Nav
                class="floating-nav"
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav'
            />
        </header>
    {/if}
    {#if sm && mobileNavVisible}
        <div 
            aria-hidden
            class="bg-black/50 fixed w-screen h-screen z-40 cursor-pointer"
            in:fade={{duration: 100}}
            out:fade={{duration: 100}}
            on:click={toggleMobileNav}
        />
        <div
            in:slide={{duration: 200}}
            out:slide={{duration: 200}}
            class="mobile-nav-drawer"
        >
            <Nav
                class="mobile-nav"
                navItems={ALL_NAV_ITEMS}
                ariaLabel='Main Nav'
                on:navigate={toggleMobileNav}
            />
        </div>
    {/if}
</MediaQuery>