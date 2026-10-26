<script>
    import { ADDRESS, PHONE_DISPLAY, PHONE_HREF } from '#constants';
    import SchoodicIcon from './icons/SchoodicIcon.svelte';
    import Logo from './Logo.svelte';

    const year = new Date().getFullYear();
</script>

<footer class="relative z-40 bg-midnight text-white border-t border-white/10">
    <div class="mx-auto flex max-w-screen-lg flex-col items-center gap-6 px-5 py-14 text-center">
        <a href="/" aria-label="Back to Top">
            <Logo class="w-28 shrink-0 hv:hover:text-white transition" />
        </a>
        <p class="font-poppins font-bold text-white/90">Family owned &amp; operated</p>
        <address class="flex flex-col sm:flex-row gap-x-6 gap-y-1 text-white/80">
            <span>{ADDRESS}</span>
            <a class="hv:hover:text-brand transition-colors" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </address>
        <div class="text-sm text-white/60">
            <p>Copyright &copy; {year} Prescott's Garage</p>
            <p>Designed by <a class="text-white/80 hv:hover:text-white transition-colors" href="https://schoodic.io"><SchoodicIcon /> <span class="-ml-2 font-bold">Schoodic</span></a></p>
        </div>
    </div>
</footer>
