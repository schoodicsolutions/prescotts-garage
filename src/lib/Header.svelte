<script>
    import LeftNav from "./LeftNav.svelte";
    import Logo from "./Logo.svelte";
    import RightNav from "./RightNav.svelte";
</script>

<header class="py-3 shadow bg-white">
    <div class="flex w-[1000px] m-auto">
        <div class="flex-1 justify-center items-center">
            <LeftNav />
        </div>
            <Logo class="h-24" />
        <div class="flex-1 justify-center items-center">
            <RightNav />
        </div>
    </div>
</header>