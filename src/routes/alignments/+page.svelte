<script>
    import { scrollTo } from "svelte-scroll-nav";
    import Image from "$lib/Image.svelte";
</script>
<main>
    <div class = {`w-full flex justify-center items-center min-h-[200px] bg-[url('/img/8162.webp')] bg-center bg-no-repeat`}>
        
        <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Alignments</h1>
    </div>
    <div class = 'flex md:flex-row flex-col max-w-screen-xl m-auto px-3 my-5 gap-1'>
        <div class = 'flex-1'>
            <p>
                Proper wheel alignment is essential for ensuring that your vehicle handles correctly, maximizes fuel efficiency, and extends the life of your tires. At our shop, we offer expert alignment services using the latest technology and techniques to ensure that your vehicle is performing at its best.
                <br/><br/>
                Our experienced technicians use state-of-the-art equipment to measure and adjust your vehicle's alignment to manufacturer specifications. We'll inspect your vehicle's suspension, steering, and tires to identify any issues that may be affecting your alignment. We'll then make any necessary adjustments to ensure that your vehicle is properly aligned, providing you with a smoother ride and better handling.
                <br/><br/>
                At Prescott's Garage, we understand that a properly aligned vehicle is essential for your safety and comfort on the road. That's why we take great care in our alignment services, using only the highest quality equipment and techniques. We pride ourselves on our commitment to customer satisfaction and quality workmanship, so you can trust us to provide you with the best possible alignment services. Contact us today to schedule an appointment or to learn more about our alignment services.
            </p>
            <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
        </div>
        <div class = 'flex-1'>
            <Image src = '/img/4241.webp' alt = 'Car that needs alignment' width='100%'/>
        </div>
    </div>
</main>