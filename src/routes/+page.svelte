<script lang="ts">
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
        topOffset={sm ? '-75px' : '0'}
        maxScroll={1200}
        downSample={4}
        class="brightness-50"
    >
        <div class="flex h-[400px] sm:h-[500px] sm:max-h-[500px] overflow-hidden justify-center items-center flex-col gap-6 px-4 sm:px-8">
            <h1 class="text-white font-kameron text-4xl sm:text-5xl lg:text-7xl font-bold text-center drop-shadow-hero">
                We're Your #1 For<br />
                Auto Repair In The<br/>
                Machias Bay Area<br/>
            </h1>
            <a class="button button-brand" use:scrollTo={{section: "about"}} href="/">Learn Who We Are</a>
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

                <a class="button button-brand w-full"  use:scrollTo={{section: "contact"}} href="/">Book Now</a>
            </Section>
            <Section scrollRef="services" heading="Services" image="/img/jeep.webp">
                <p class="text-justify">
                    Prescott's Garage offers a range of services to help
                    keep your vehicle running smoothly and efficiently.
                    Here are some of the services we offer:
                </p>
                <ul class="w-full text-center font-medium text-lg grid grid-cols-1 sm:grid-cols-2 sm:text-lg">
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
                <p class="text-center">Ready to make an appointment?</p>
                <a class="button button-shrink button-messenger w-full" href="https://m.me/100057455889767">
                    <MessengerIcon width="32" height="32"/>
                    Connect with us on Messenger
                </a>
                <DeviceDetector showInDevice="mobile">
                    <a class="button button-shrink button-brand w-full" href="tel:12072593360">
                        <PhoneIcon width="32" height="32"/>
                        Call (207) 259-3360
                    </a>
                </DeviceDetector>

                <DeviceDetector showInDevice="desktop">
                    <div>
                        <p class="text-lg font-medium text-center">or, call us at</p>
                        <p class="text-3xl font-black text-center tracking-tight font-poppins">(207) 259-3360</p>
                        <p class="text-xl font-bold text-center tracking-tight">Mon &ndash; Fri &nbsp; 8am &ndash; 5pm</p>
                    </div>
                </DeviceDetector>
            </Section>
        </div>
    </VideoBackground>
</MediaQuery>