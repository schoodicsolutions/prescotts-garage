<script>
    import { scrollTo } from "svelte-scroll-nav";
    import Image from "$lib/Image.svelte";
</script>
<main class = 'bg-black'>
    <div class = {`w-full flex justify-center items-center min-h-[200px] bg-[url('/img/gallery/8414.webp')] bg-center bg-no-repeat`}>
        <div class = 'w-full min-h-[200px] flex justify-center items-center bg-black/50'>
            <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Diagnostics</h1>
        </div>
    </div>
    <div class = 'flex md:flex-row flex-col max-w-screen-xl m-auto px-3 py-5 gap-1'>
        <div class = 'flex-1 text-white'>
            <p>
                Our expert technicians use state-of-the-art diagnostic equipment and techniques to accurately diagnose and repair any issues with your vehicle. We understand that automotive problems can be frustrating and time-consuming, which is why we strive to make the diagnostic process as efficient and transparent as possible.
                <br/><br/>
                At Prescott's Garage, we believe that a thorough diagnosis is the key to a successful repair. Our team of experienced technicians will carefully inspect your vehicle and use advanced diagnostic tools to identify any underlying issues. We'll then provide you with a detailed report that outlines our findings and recommendations for repair.
                <br/><br/>
                Whether you're dealing with a check engine light, unusual noises, or any other issue, you can trust Prescott's Garage to provide you with the accurate and reliable diagnostics you need. Our team is committed to delivering exceptional customer service and quality workmanship, so you can feel confident that your vehicle is in good hands. Contact us today to schedule a diagnostic appointment or to learn more about our automotive services.
            </p>
            <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
        </div>
        <div class = 'flex-1'>
            <Image src = '/img/gallery/6343.webp' alt = 'Car that might have problems' width='100%'/>
        </div>
    </div>
</main>