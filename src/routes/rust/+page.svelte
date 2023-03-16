<script>
    import { scrollTo } from "svelte-scroll-nav";
    import Image from "$lib/Image.svelte";
</script>
<main class = 'bg-black'>
    <div class = {`w-full min-h-[325px] flex justify-center items-center bg-[url('/img/gallery/5619.webp')] bg-center bg-no-repeat`}>
        <div class = 'w-full min-h-[325px] flex justify-center items-center bg-black/50'>
            <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Rust Repair</h1>
        </div>
    </div>
    <div class = 'flex md:flex-row flex-col max-w-screen-xl m-auto px-3 py-7 gap-5'>
        <div class = 'flex-1 text-white flex gap-3 flex-col'>
            <p>
                At Prescott's Garage, we understand how frustrating and unsightly rust can be on your vehicle. That's why we offer expert rust repair services to help restore your vehicle's appearance and protect it from further damage.
                <br/><br/>
                Our skilled technicians have years of experience in repairing rust damage on all types of vehicles. Whether it's a small spot on a fender or extensive damage to the undercarriage, we have the tools and expertise to get the job done right. We use high-quality materials and advanced techniques to remove rust and repair any damage, ensuring that your vehicle looks great and is protected from further corrosion.
                <br/><br/>
                At Prescott's Garage, we believe that prevention is key when it comes to rust. That's why we also offer rust prevention services, such as undercoating and rust inhibitors, to help protect your vehicle from rust and corrosion in the future. With our commitment to quality workmanship and customer satisfaction, you can trust us to provide you with the best possible rust repair services. Contact us today to schedule an appointment or to learn more about our rust repair and prevention services.
            </p>
            <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
        </div>
        <div class = 'flex-1'>
            <Image src = '/img/gallery/9770.webp' alt = 'Car with Rust' width='100%' height="100%"/>
        </div>
    </div>
</main>