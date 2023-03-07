<script>
    import { scrollTo } from "svelte-scroll-nav";
    import Image from "$lib/Image.svelte";
</script>
<main class = 'bg-black'>
    <div class = {`w-full flex justify-center items-center min-h-[200px] bg-[url('/img/bg-shop.webp')] bg-center bg-no-repeat`}>
        <div class = 'w-full min-h-[200px] flex justify-center items-center bg-black/50'>
            <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Air Conditioning</h1>
        </div>
    </div>
    <div class = 'flex md:flex-row flex-col max-w-screen-xl m-auto px-3 py-5 gap-1'>
        <div class = 'flex-1 text-white'>
            <p>
                We understand how important a properly functioning air conditioning system is for your comfort while driving. That's why we offer expert air conditioning services to help keep your vehicle cool and comfortable, no matter how hot it gets outside.
                <br/><br/>
                Our experienced technicians have the knowledge and equipment to diagnose and repair any issues with your vehicle's air conditioning system. Whether it's a leak, a malfunctioning compressor, or a clogged filter, we'll get to the root of the problem and provide you with the necessary repairs. We use high-quality parts and materials to ensure that your air conditioning system is running at its best and that you stay cool and comfortable on the road.
                <br/><br/>
                At Prescott's Garage, we believe that preventative maintenance is key to keeping your air conditioning system running smoothly. That's why we also offer air conditioning inspections and recharge services to help keep your system working properly. With our commitment to quality workmanship and customer satisfaction, you can trust us to provide you with the best possible air conditioning services. Contact us today to schedule an appointment or to learn more about our air conditioning services.
            </p>
            <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
        </div>
        <div class = 'flex-1'>
            <Image src = '/img/gallery/3732.webp' alt = 'Car with Rust' width='100%'/>
        </div>
    </div>
</main>