<script lang="ts">
  import MapIcon from "$lib/icons/MapIcon.svelte";

  import CarIcon from "$lib/icons/CarIcon.svelte";
  import AirPurifierIcon from "$lib/icons/AirPurifierIcon.svelte";
  import HeartMonitorIcon from "$lib/icons/HeartMonitorIcon.svelte";
  import WrenchIcon from "$lib/icons/WrenchIcon.svelte";
  import TireIcon from "$lib/icons/TireIcon.svelte";

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

<MediaQuery query={['(min-width: 800px)', '(max-width: 640px)']} let:matchesArray={[md, sm]}>
    <VideoBackground
        videoId="Lupj8t_N03I"
        poster="/img/bg-shop.webp"
        fadeOnLoop={true}
        loop={true}
        minHeight={sm ? 600 : 800}
        topOffset={'-80px'}
        maxScroll={1200}
        verticalParallax={-200}
        downSample={4}
        playDelay={5}
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
            <Section scrollRef="about" heading="About Us" image={{src: "/img/wagons.webp", alt: "Two Jeep Grand Wagoneers, parked next to one another"}}>
                <div class="flex flex-col items-center justify-center gap-4">
                    <p class="text-justify text-base">
                        Harold Prescott started Prescott's Garage in 2005 with one mission:
                        to provide reliable, honest auto repair services to the Greater Machias area.
                        Since then, our shop has become a trusted name in the community, 
                        thanks to Harold's dedication to his customers and his passion for his work. 
                    </p>
                    <p class="text-justify text-base">
                        We take pride in providing top-quality auto services at affordable prices.
                        From routine maintenance to complex repairs, our skilled mechanics have the
                        expertise to get you back on the road safely and efficiently. 
                    </p>
                </div>

                <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
            </Section>
            <Section 
                scrollRef="services" 
                heading="Services" 
                headingOnSide={true}
                image={{
                    src: '/img/jeep.webp', 
                    alt: 'Jeep Wrangler body suspended in the air on lift, with frame and motor below',
                }}>
                <!--- image={{
                    src: '/img/jeep.webp', 
                    alt: 'Jeep Wrangler body suspended in the air on lift, with frame and motor below',
                }} --->
                <!---
                <img 
                    class="order-1 lg:order-none lg:w-1/2 shrink-0"
                    src="/img/jeep.webp" 
                    alt="Jeep Wrangler body suspended in the air on lift, with frame and motor below" 
                />
                ---> 
                <p class="text-justify">
                    Prescott's Garage offers a range of services to help
                    keep your vehicle running smoothly and efficiently.
                    Here are some of the services we offer:
                </p>
                <ul class="w-full text-left marker:text-orange-500 list-square font-bold text-lg grid grid-cols-1 sm:grid-cols-2 sm:text-lg gap-y-4 gap-x-6">
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

                <h2 class="font-poppins text-4xl sm:text-3xl lg:text-5xl font-bold text-left">
                    More on...
                </h2>
                
                <!--- need new svg's that reflect figma design --->
                <nav class="h-40 text-base flex flex-row gap-12 justify-evenly items-center">
                    <a href="/customs" class="sp">
                        <CarIcon width="60" height="60" />
                        <a href="/customs"><span>Customs</span></a>
                    </a>
                    <a href="/alignments" class="sp">
                        <TireIcon width="60" height="60" />                  
                        <a href="/alignments"><span>Alignments</span></a>
                    </a>
                    <a href="/rust" class="sp">
                        <WrenchIcon width="60" height="60" />                      
                        <a href="/rust"><span>Rust Repair</span></a>
                    </a>
                    <a href="/maintenance" class="sp">
                        <AirPurifierIcon width="60" height="60" />
                        <a href="/maintenance"><span>Air Conditioning</span></a>
                    </a>
                    <a href="/diagnostics" class="sp">
                        <HeartMonitorIcon width="60" height="60" />                    
                        <a href="/diagnostics"><span>Diagnostics</span></a>
                    </a>
                </nav>
            </Section>
            <Section scrollRef="testimonials" heading="Testimonials" wide>
                <div class="flex flex-col max-w-full lg:flex-row lg:py-12 lg:gap-32 gap-10 justify-between px-10">
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
            <!--- confused on <Section> styling --->
            <Section scrollRef="contact" heading="Contact Us" headingOnSide={true}>
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div class="flex flex-col gap-5 flex-1">
                        <!---<h1 class="text-left font-poppins text-5xl">Contact Us</h1>--->
                        <h2 class="text-left font-poppins text-2xl">Ready to book?</h2>
                        <h3 class="font-bold text-2xl text-left">Call us at: </h3>
                        
                        <p class="text-2xl font-black text-left hidden sm:block tracking-tight font-poppins">(207) 259-3360</p>
                        <p class="text-2xl font-black text-left block sm:hidden tracking-tight font-poppins">(207) 259-3360</p>

                        <a class="button button-shrink button-messenger w-full" href="https://m.me/100057455889767">
                            <MessengerIcon width="32" height="32" />
                            Connect With Us
                        </a>
                        <br />
                        <div>
                            <h4 class="text-left font-poppins text-lg">Hours of Operation</h4>
                            <div class="grid grid-cols-2 gap-2 text-left mt-4">
                                <p class="font-bold">Sunday</p> <p class="font-medium">CLOSED</p>
                                <p class="font-bold">Monday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Tuesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Wednesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Thursday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Friday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Saturday</p> <p class="font-medium">CLOSED</p>
                            </div>  
                        </div>
                    </div>
            
                    <div class="border-t border-solid border-gray-500 lg:border-t-0 lg:border-l"></div>
            
                    <div class="flex-1">
                        <h2 class="text-center font-poppins text-2xl font-bold">Come visit us!</h2>
                        <address class="text-center text-lg font-bold">
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
                        ></iframe>
                        <button class="text-center text-xl font-bold bg-orange-500 w-full h-[40px]">Get Directions</button>
                    </div>
                </div>
            </Section>
            
            <!---
            <Section scrollRef="contact" heading="Contact Us">
                <div class="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div class="flex flex-col gap-4 flex-1">
                        <p class="text-center font-poppins text-2xl">Ready to book?</p>

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

                        <div>
                            <p class="text-center font-poppins text-lg">Hours of Operation</p>
                            <div class="grid grid-cols-2 gap-2 text-center">
                                <p class="font-bold">Sunday</p> <p class="font-medium">CLOSED</p>
                                <p class="font-bold">Monday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Tuesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Wednesday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Thursday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Friday</p> <p class="font-medium">8 AM &ndash; 5 PM</p>
                                <p class="font-bold">Saturday</p> <p class="font-medium">CLOSED</p>
                            </div>  
                        </div>

                    </div>

                    <p class="rounded-none border min-h-40 max-h-auto border-solid border-slate-500"></p>

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
            --->
        </div>
    </VideoBackground>
</MediaQuery>