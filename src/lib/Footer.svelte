<script>
	import { page } from '$app/stores';
  import SchoodicIcon from './icons/SchoodicIcon.svelte';

    const year = new Date().getFullYear();
</script>

<footer class="text-center bg-midnight z-40 relative">
    <div class=" text-white h-screen short:h-auto lg:h-auto">
        <div class="flex flex-col lg:flex-row justify-center lg:items-start gap-10 md:gap-20 xl:gap-40 py-20 h-full">
            <section class="flex flex-col items-center lg:order-1 gap-1 lg:gap-4">
                <div>
                    <h1>Copyright &copy; {year} Prescott's Garage</h1>
                    <p>Designed by <a href="https://schoodic.io"><SchoodicIcon /> <span class="-ml-2 font-bold">Schoodic Media</span></a></p>
                </div>
            </section>
        </div>
    </div>
</footer>