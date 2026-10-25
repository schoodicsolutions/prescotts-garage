<script lang="ts">
    import MapIcon from "#lib/icons/MapIcon.svelte";
    import CarIcon from "#lib/icons/CarIcon.svelte";
    import AirPurifierIcon from "#lib/icons/AirPurifierIcon.svelte";
    import HeartMonitorIcon from "#lib/icons/HeartMonitorIcon.svelte";
    import WrenchIcon from "#lib/icons/WrenchIcon.svelte";
    import TireIcon from "#lib/icons/TireIcon.svelte";
    import MessengerIcon from "#lib/icons/MessengerIcon.svelte";
    import PhoneIcon from "#lib/icons/PhoneIcon.svelte";
    import Hours from "#lib/Hours.svelte";
    import JsonLd from "#lib/JsonLd.svelte";
    import { business, website } from "#lib/schema.ts";
    import Review from "#lib/Review.svelte";
    import Section from "#lib/Section.svelte";
    import VideoBackground from "#lib/VideoBackground.svelte";
    import { ADDRESS, DIRECTIONS_HREF, MESSENGER_HREF, PHONE_DISPLAY, PHONE_HREF, SERVICES } from "#constants";
    import { PUBLIC_MEDIA_URL } from "$app/env/public";
    import { MediaQuery } from "svelte/reactivity";
    import { scrollRef, scrollTo } from "svelte-scroll-nav";

    const sm = new MediaQuery('max-width: 640px');
    const md = new MediaQuery('min-width: 800px');

    const moreServices = [
        { href: '/customs', label: 'Customs', icon: CarIcon },
        { href: '/alignments', label: 'Alignments', icon: TireIcon },
        { href: '/rust', label: 'Rust Repair', icon: WrenchIcon },
        { href: '/maintenance', label: 'Air Conditioning', icon: AirPurifierIcon },
        { href: '/diagnostics', label: 'Diagnostics', icon: HeartMonitorIcon },
    ];
</script>

<JsonLd nodes={[business, website]} />

<VideoBackground
    src={`${PUBLIC_MEDIA_URL}/pgarage-banner.mp4`}
    poster="/img/bg-shop.webp"
    fadeOnLoop={true}
    loop={true}
    minHeight={sm.current ? 600 : 800}
    topOffset={sm.current ? '-100px' : md.current ? '-200px' : 0}
    maxScroll={1200}
    verticalParallax={-200}
    class="brightness-50"
>
    <div class="flex min-h-[460px] sm:min-h-[540px] justify-center items-center flex-col gap-8 px-5 sm:px-8 py-16">
        <h1 class="text-white font-kameron text-5xl sm:text-7xl lg:text-8xl font-bold text-center leading-tight drop-shadow-hero">
            Fixed Right.<br />
            Priced Fair.
        </h1>
        <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a class="button button-brand w-full sm:w-auto" use:scrollTo={{section: "contact"}} href="/">Book An Appointment</a>
            <a class="button button-ghost w-full sm:w-auto" href={PHONE_HREF}>
                <PhoneIcon width="22" height="22" />
                {PHONE_DISPLAY}
            </a>
        </div>
    </div>
    <div>
        <Section scrollRef="about" eyebrow="Since 2005" heading="About Us" headingOnSide image={{src: "/img/wagons.webp", alt: "Two Jeep Grand Wagoneers, parked next to one another"}}>
            <div class="flex flex-col gap-5 text-lg leading-relaxed text-white/85">
                <p>
                    Harold Prescott started Prescott's Garage in 2005 with one mission:
                    to provide reliable, honest auto repair services to the Greater Machias area.
                    Since then, our shop has become a trusted name in the community,
                    thanks to Harold's dedication to his customers and his passion for his work.
                </p>
                <p>
                    We take pride in providing top-quality auto services at affordable prices.
                    From routine maintenance to complex repairs, our skilled mechanics have the
                    expertise to get you back on the road safely and efficiently.
                </p>
            </div>

            <a class="button button-brand w-full sm:w-fit" use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
        </Section>

        <section class="section" use:scrollRef={"services"}>
            <div class="w-full max-w-screen-xl flex flex-col gap-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-3">
                            <p class="eyebrow">What We Do</p>
                            <h2 class="section-heading">Services</h2>
                        </div>
                        <p class="text-lg leading-relaxed text-white/85">
                            Prescott's Garage offers a range of services to help
                            keep your vehicle running smoothly and efficiently.
                            Here are some of the services we offer:
                        </p>
                        <ul class="w-full text-left marker:text-brand list-square pl-5 font-bold text-lg grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                            {#each SERVICES as service}
                                <li class="pl-1">{service}</li>
                            {/each}
                        </ul>
                        <a class="button button-brand w-full sm:w-fit" use:scrollTo={{section: "contact"}} href="/">Get In Touch</a>
                    </div>
                    <img src="/img/jeep.webp" alt="Jeep Wrangler body suspended in the air on a lift, with the frame and motor below" loading="lazy" class="w-full rounded-2xl shadow-2xl ring-1 ring-white/10">
                </div>

                <div class="flex flex-col gap-8">
                    <h3 class="font-poppins text-3xl lg:text-4xl font-bold">More on&hellip;</h3>
                    <nav aria-label="Service Pages" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                        {#each moreServices as { href, label, icon: Icon }}
                            <a {href} class="service-card last:col-span-2 sm:last:col-span-1">
                                <Icon width="56" height="56" />
                                <span class="text-center">{label}</span>
                            </a>
                        {/each}
                    </nav>
                </div>
            </div>
        </section>

        <Section scrollRef="testimonials" eyebrow="Don't Take Our Word For It" heading="Testimonials" wide>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pt-6">
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
                    100% Satisfaction at a fair price. No BS, No taking advantage, No "Jacked Up Prices" Great work, on time results. Best of the Best.
                </Review>
            </div>
        </Section>

        <Section scrollRef="contact" eyebrow="Ready To Book?" heading="Contact Us" headingOnSide wide>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="flex flex-col gap-6">
                    <div class="card p-6 flex flex-col gap-5">
                        <div>
                            <h3 class="font-bold text-lg text-white/70">Call us at</h3>
                            <a class="font-poppins text-3xl sm:text-4xl font-bold tracking-tight hv:hover:text-brand transition-colors" href={PHONE_HREF}>{PHONE_DISPLAY}</a>
                        </div>
                        <div class="flex flex-col sm:flex-row gap-3">
                            <a class="button button-shrink button-brand w-full" href={PHONE_HREF}>
                                <PhoneIcon width="24" height="24" />
                                Call Now
                            </a>
                            <a class="button button-shrink button-messenger w-full" href={MESSENGER_HREF}>
                                <MessengerIcon width="28" height="28" />
                                Connect With Us
                            </a>
                        </div>
                    </div>
                    <Hours />
                </div>

                <div class="card p-6 flex flex-col gap-5">
                    <div>
                        <h3 class="font-poppins text-2xl font-bold">Come visit us!</h3>
                        <address class="text-lg text-white/80">{ADDRESS}</address>
                    </div>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.91813531765126!2d-67.35627059451087!3d44.74880618891189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca8cdeced67e90d%3A0xa1c9cbe11461026a!2sPrescott&#39;s%20Garage!5e1!3m2!1sen!2sus!4v1677690932106!5m2!1sen!2sus"
                        class="w-full min-h-[280px] grow rounded-xl"
                        style="border:0;"
                        allowfullscreen={true}
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <a class="button button-shrink button-brand w-full" href={DIRECTIONS_HREF}>
                        <MapIcon width="28" height="28" />
                        Get Directions
                    </a>
                </div>
            </div>
        </Section>
    </div>
</VideoBackground>
