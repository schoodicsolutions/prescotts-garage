<script lang="ts">
  import MapIcon from "$lib/icons/MapIcon.svelte";
  import MessengerIcon from "$lib/icons/MessengerIcon.svelte";
  import PhoneIcon from "$lib/icons/PhoneIcon.svelte";
import Review from "$lib/Review.svelte";
  import Section from "$lib/Section.svelte";
  import VideoBackground from "$lib/VideoBackground.svelte";
  import DeviceDetector from "svelte-device-detector";
  import MediaQuery from "svelte-media-queries";
  import { scrollTo } from "svelte-scroll-nav";
  const sections = ['about', 'portfolio', 'testimonials', 'contact', 'customs', 'alignments', 'rust', 'maintenance', 'diagnostics']

  let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={['(min-width: 1600px)', '(max-width: 640px)']} let:matchesArray={[xxl, sm]}>
    <VideoBackground
        videoId="Lupj8t_N03I"
        poster="/img/bg-shop.webp"
        fadeOnLoop={true}
        loop={true}
        minHeight={sm ? 600 : 800}
        topOffset={'-75px'}
        maxScroll={1200}
        verticalParallax={-200}
        downSample={4}
        class="brightness-50"
    >
        <div class="flex h-[400px] sm:h-[500px] sm:max-h-[500px] overflow-hidden justify-center items-center flex-col gap-6 px-4 sm:px-8">
            <h1 class="text-white font-kameron text-4xl sm:text-5xl lg:text-7xl font-bold text-center drop-shadow-hero">
                We're Your #1 For<br />
                Auto Repair In The<br/>
                Machias Bay Area<br/>
            </h1>
            <a class="button button-brand" use:scrollTo={{section: "contact"}} href="/">Book An Appointment</a>
        </div>
        <div>
            <Section scrollRef="about" heading="About Us" image="/img/wagons.webp">
                <p class="text-justify">
                    Harold Prescott started Prescott's Garage in 2005 with one mission:
                    to provide reliable, honest auto repair services to the Greater Machias area.
                    Since then, our shop has become a trusted name in the community, 
                    thanks to Harold's dedication to his customers and his passion for his work. 
                </p>
                <p class="text-justify">
                    We take pride in providing top-quality auto services at affordable prices.
                    From routine maintenance to complex repairs, our skilled mechanics have the
                    expertise to get you back on the road safely and efficiently. 
                </p>

                <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
            </Section>
            <Section scrollRef="services" heading="Services" image="/img/jeep.webp">
                <p class="text-justify">
                    Prescott's Garage offers a range of services to help
                    keep your vehicle running smoothly and efficiently.
                    Here are some of the services we offer:
                </p>
                <ul class="w-full text-center font-bold text-lg grid grid-cols-1 sm:grid-cols-2 sm:text-lg gap-y-4">
                    <li>Oil Changes</li>
                    <li>State Inspections</li>
                    <li>Brake Service</li>
                    <li>Tire Rotation & Balance</li>
                    <li>Tire Repair & Replacement</li>
                    <li>Electrical System Repair</li>
                    <li>Suspension & Steering</li>
                    <li>Air Conditioning Service</li>
                    <li>Exhaust System Repair</li>
                    <li>Custom & Performance</li>
                </ul>
                <a class="button button-brand w-full" use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
            </Section>
            <Section scrollRef="testimonials" heading="Testimonials">
                <div class="flex flex-col max-w-full lg:flex-row lg:py-12 gap-10">
                    <Review rating={5} author="John N.">
                        Last year, my car broke
                        down in the middle of town, I was towed to Prescott's Garage.
                        They worked on my car that morning, and I was back out by lunch.
                    </Review>
                    <Review rating={5} author="Brittany F.">
                        We were on our way home from visiting family in Machias
                        and had to get a tire patched. Prescott's Garage was amazing.
                        They fixed it on the spot in 10 minutes.
                    </Review>
                    <Review rating={5} author="Michael C.">
                        100% Satisfaction at a fair price. No BS, No taking advantage, No "Jacked Up Prices" Great work , on time results. Best of the Best.
                    </Review>
                </div>
            </Section>
            <Section scrollRef="contact" heading="Contact Us">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div class="flex flex-col gap-4 flex-1">
                        <p class="text-center font-poppins text-2xl">Ready to book?</p>
                        <div>
                            <p class="text-center font-poppins text-lg">Hours of Operation</p>
                            <div class="grid grid-cols-2 text-center">
                                <p class="font-bold">Sunday</p> <p class="font-medium">CLOSED</p>
                                <p class="font-bold">Monday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Tuesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Wednesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Thursday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Friday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Saturday</p> <p class="font-medium">CLOSED</p>
                            </div>  
                        </div>

                        <DeviceDetector showInDevice="mobile">
                            <a class="button button-shrink button-brand w-full" href="tel:12072593360">
                                <PhoneIcon width="32" height="32"/>
                                Call (207) 259-3360
                            </a>
                        </DeviceDetector>
        
                        <DeviceDetector showInDevice="desktop">
                            <div class="mb-0.5">
                                <p class="text-lg font-medium text-center">Call us at</p>
                                <p class="text-3xl font-black text-center tracking-tight font-poppins">(207) 259-3360</p>
                            </div>
                        </DeviceDetector>

                        <a class="button button-shrink button-messenger w-full" href="https://m.me/100057455889767">
                            <MessengerIcon width="32" height="32"/>
                            Connect with us on Messenger
                        </a>

                    </div>
                    <div class="flex-1">
                        <p class="text-center font-poppins text-2xl">Come visit us!</p>
                        <address class="text-center text-xl">
                            67 Main St, East Machias, ME 04630
                        </address>

                        <iframe 
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.91813531765126!2d-67.35627059451087!3d44.74880618891189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca8cdeced67e90d%3A0xa1c9cbe11461026a!2sPrescott&#39;s%20Garage!5e1!3m2!1sen!2sus!4v1677690932106!5m2!1sen!2sus"
                            class="max-w-full w-[400px] h-[250px] my-4"
                            style="border:0;"
                            allowfullscreen={true} 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        />
                        <a class="button button-shrink button-brand w-full" href="https://maps.apple.com/?daddr=Prescott%27s+Garage,+67+Main+Street,+East+Machias,+ME">
                            <MapIcon width="32" height="32"/>
                            Get directions
                        </a>
                    </div>
                </div>
            </Section>
        </div>
    </VideoBackground>
</MediaQuery>