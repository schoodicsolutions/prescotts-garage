<script lang="ts">
    import { BOTTOM_NAV_ITEMS, PHONE_DISPLAY, PHONE_HREF } from "#constants";
    import Logo from "./Logo.svelte";
    import Nav from "./Nav.svelte";
    import { fade, fly, slide } from "svelte/transition";
    import MenuIcon from "./icons/MenuIcon.svelte";
    import PhoneIcon from "./icons/PhoneIcon.svelte";

    let scrollY: number = $state(0);

    let floatingNavVisible = $derived(scrollY > 320);
    let mobileNavVisible = $state(false);

    function toggleMobileNav() {
        mobileNavVisible = !mobileNavVisible;
    }

    function onkeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && mobileNavVisible) {
            mobileNavVisible = false;
        }
    }
</script>

<svelte:window bind:scrollY {onkeydown} />
<svelte:head>
    {#if mobileNavVisible}
        <style>body { overflow: hidden }</style>
    {/if}
</svelte:head>

<header class="main-header" aria-label="Main Header">
    <div class="flex h-20 sm:h-auto flex-row sm:flex-col items-center justify-between sm:justify-center px-5 sm:px-0">
        <a href="/" aria-label="Prescott's Garage">
            <Logo class="w-20 sm:w-36 shrink-0 hv:hover:text-white transition" />
        </a>
        <button
            class="button button-icon sm:hidden -mr-2"
            onclick={toggleMobileNav}
            aria-label="Toggle Navigation"
            aria-expanded={mobileNavVisible}
            aria-controls="mobile-nav"
        >
            <MenuIcon width="28" height="28" />
        </button>
    </div>
    <Nav
        class="below-nav hidden sm:flex"
        navItems={BOTTOM_NAV_ITEMS}
        ariaLabel='Main Nav'
    />
</header>

{#if floatingNavVisible}
    <header
        in:fly={{ y: -64, duration: 200 }}
        out:fly={{ y: -64, duration: 200 }}
        aria-label="Floating Header"
        class="floating-header hidden sm:block"
    >
        <div class="mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-6 px-8">
            <a href="/" aria-label="Prescott's Garage" class="hidden lg:block">
                <Logo class="w-14 shrink-0 hv:hover:text-white transition" />
            </a>
            <Nav
                class="floating-nav"
                navItems={BOTTOM_NAV_ITEMS}
                ariaLabel='Floating Nav'
            />
            <a class="button button-brand button-shrink h-10 hidden lg:inline-flex" href={PHONE_HREF}>
                <PhoneIcon width="20" height="20" />
                {PHONE_DISPLAY}
            </a>
        </div>
    </header>
{/if}

{#if mobileNavVisible}
    <div
        aria-hidden="true"
        class="bg-black/60 backdrop-blur-sm fixed inset-0 z-40 cursor-pointer sm:hidden"
        in:fade={{duration: 100}}
        out:fade={{duration: 100}}
        onclick={toggleMobileNav}
    ></div>
    <div
        id="mobile-nav"
        in:slide={{duration: 200}}
        out:slide={{duration: 200}}
        class="mobile-nav-drawer sm:hidden"
    >
        <Nav
            class="mobile-nav"
            navItems={BOTTOM_NAV_ITEMS}
            ariaLabel='Mobile Nav'
            onnavigate={toggleMobileNav}
        />
        <div class="px-8 pt-8">
            <a class="button button-brand w-full" href={PHONE_HREF}>
                <PhoneIcon width="24" height="24" />
                Call {PHONE_DISPLAY}
            </a>
        </div>
    </div>
{/if}
