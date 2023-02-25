<script lang="ts">
  import Section from "$lib/Section.svelte";
  import VideoBackground from "$lib/VideoBackground.svelte";
  import MediaQuery from "svelte-media-queries";
  import { scrollTo } from "svelte-scroll-nav";
  const sections = ['about', 'portfolio', 'testimonials', 'contact', 'customs', 'alignments', 'rust', 'maintenance', 'diagnostics']

  let scrollY: number = 0;
</script>

<svelte:window bind:scrollY />

<MediaQuery query={['(min-width: 1600px)', '(max-width: 640px)']} let:matchesArray={[sm, xxl]}>
    <VideoBackground
        videoId="Lupj8t_N03I"
        poster="/img/bg-shop.webp"
        fadeOnLoop={true}
        loop={true}
        minHeight={sm ? 500 : 800}
        maxScroll={1200}
        downSample={4}
        verticalParallax={200}
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

                <div class="w-full flex gap-4">
                    <a class="button button-brand grow"  use:scrollTo={{section: "contact"}} href="/">Book Now</a>
                </div>
            </Section>
            <Section scrollRef="services" heading="Services" image="/img/jeep.webp">
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
                    Come visit us at 67 Main St East Machias, ME 04630, 
                    and experience the difference that sets us apart.
                </p>
            </Section>
            <Section scrollRef="testimonials" heading="Testimonials" image="/img/wagons.jpg">
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
                    Come visit us at 67 Main St East Machias, ME 04630, 
                    and experience the difference that sets us apart.
                </p>
            </Section>
            <Section scrollRef="contact" heading="Contact Us" image="/img/wagons.jpg">
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
                    Come visit us at 67 Main St East Machias, ME 04630, 
                    and experience the difference that sets us apart.
                </p>
            </Section>
        </div>
    </VideoBackground>
</MediaQuery>