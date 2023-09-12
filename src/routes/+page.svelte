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

<MediaQuery query={['(min-width: 800px)', '(max-width: 640px)']} let:matchesArray={[md, sm]}>
    <VideoBackground
        videoId="Lupj8t_N03I"
        poster="/img/bg-shop.webp"
        fadeOnLoop={true}
        loop={true}
        minHeight={sm ? 600 : 800}
        topOffset={sm ? '-100px' : md ? '-200px' : 0}
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
            <Section scrollRef="about" heading="About Us" image={{src: "/img/wagons.webp", alt: "Two Jeep Grand Wagoneers, parked next to one another",}}>
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
            <Section scrollRef="services" heading="Services" image={{src: '/img/jeep.webp', alt: 'Jeep Wrangler body suspended in the air on lift, with frame and motor below'}}>
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
                
                <nav class="h-40  text-base flex flex-row gap-5 justify-evenly items-center">
                    <a href="/customs" class="sp">
                        <svg width="54" height="50" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M63.1666 20.0334C62.5 18.0667 60.6333 16.6667 58.4333 16.6667H21.7666C19.5666 16.6667 17.7333 18.0667 17.0333 20.0334L10.1 40V66.6667C10.1 68.5 11.6 70 13.4333 70H16.7666C18.6 70 20.1 68.5 20.1 66.6667V63.3334H60.1V66.6667C60.1 68.5 61.6 70 63.4333 70H66.7666C68.6 70 70.1 68.5 70.1 66.6667V40L63.1666 20.0334ZM22.9333 23.3334H57.2333L60.8333 33.7H19.3333L22.9333 23.3334ZM63.4333 56.6667H16.7666V40H63.4333V56.6667Z" fill="#F85F00"/>
                            <path d="M25.1 53.3333C27.8614 53.3333 30.1 51.0947 30.1 48.3333C30.1 45.5719 27.8614 43.3333 25.1 43.3333C22.3386 43.3333 20.1 45.5719 20.1 48.3333C20.1 51.0947 22.3386 53.3333 25.1 53.3333Z" fill="#F85F00"/>
                            <path d="M55.1 53.3333C57.8614 53.3333 60.1 51.0947 60.1 48.3333C60.1 45.5719 57.8614 43.3333 55.1 43.3333C52.3386 43.3333 50.1 45.5719 50.1 48.3333C50.1 51.0947 52.3386 53.3333 55.1 53.3333Z" fill="#F85F00"/>
                        </svg>                            
                        <span>Customs</span>
                    </a>
                    <a href="/alignments" class="sp">
                        <svg width="54" height="53.4653571218529" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M73.2799 42.92L72.1999 40.1L77.7799 38C75.0199 31.64 70.0999 26.54 63.9199 23.42L61.5199 28.76L58.7599 27.5L61.1599 22.1C57.7999 20.78 54.1399 20 50.2999 20C47.1199 20 44.0599 20.66 41.1799 21.5L43.2199 27.02L40.3999 28.1L38.2999 22.52C31.9399 25.28 26.8399 30.2 23.7199 36.38L29.0599 38.78L27.7999 41.54L22.3999 39.14C21.0799 42.5 20.2999 46.16 20.2999 50C20.2999 53.18 20.9599 56.24 21.7999 59.12L27.3199 57.08L28.3999 59.9L22.8199 62C25.5799 68.36 30.4999 73.46 36.6799 76.58L39.0799 71.24L41.8399 72.5L39.4399 77.9C42.7999 79.22 46.4599 80 50.2999 80C53.4799 80 56.5399 79.34 59.4199 78.5L57.3799 72.98L60.1999 71.9L62.2999 77.48C68.6599 74.72 73.7599 69.8 76.8799 63.62L71.5399 61.22L72.7999 58.46L78.1999 60.86C79.5199 57.5 80.2999 53.84 80.2999 50C80.2999 46.82 79.6399 43.76 78.7999 40.88L73.2799 42.92ZM57.1999 66.62C48.0199 70.4 37.4599 66.08 33.6799 56.9C29.8999 47.72 34.2199 37.16 43.3999 33.38C52.5799 29.6 63.1399 33.92 66.9199 43.1C67.8311 45.282 68.3024 47.6224 68.3068 49.987C68.3112 52.3515 67.8486 54.6937 66.9454 56.879C66.0423 59.0643 64.7165 61.0498 63.0441 62.7214C61.3717 64.393 59.3857 65.7179 57.1999 66.62Z" fill="#F85F00"/>
                        </svg>                            
                        <span>Alignments</span>
                    </a>
                    <a href="/rust" class="sp">
                        <svg width="54" height="51" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M65.5779 24.107C65.3924 23.6486 65.0985 23.242 64.7214 22.9221C64.3443 22.6022 63.8952 22.3786 63.4127 22.2704C62.9302 22.1621 62.4286 22.1726 61.951 22.3007C61.4734 22.4289 61.034 22.671 60.6705 23.0063L50.7895 32.1328L47.5587 31.4398L46.858 28.2014L55.9772 18.3207C56.3124 17.9572 56.5545 17.5179 56.6827 17.0403C56.8109 16.5627 56.8213 16.0611 56.7131 15.5786C56.6049 15.0961 56.3812 14.647 56.0613 14.2699C55.7414 13.8928 55.3348 13.599 54.8764 13.4135C51.3661 11.9933 47.5165 11.6335 43.8038 12.3785C40.0911 13.1235 36.6783 14.9407 33.9877 17.6052C31.2971 20.2697 29.4468 23.6645 28.6657 27.3697C27.8846 31.0749 28.207 34.9277 29.5931 38.4516L14.7971 51.2419C14.741 51.2903 14.685 51.3413 14.634 51.3948C12.9369 53.1197 11.9902 55.4453 12.0001 57.865C12.0099 60.2847 12.9756 62.6025 14.6866 64.3135C16.3977 66.0245 18.7155 66.9901 21.1353 66.9999C23.5551 67.0098 25.8807 66.0631 27.6057 64.3661C27.6592 64.3151 27.7101 64.2591 27.7585 64.203L40.5391 49.4075C44.0649 50.7961 47.9207 51.1198 51.6287 50.3384C55.3367 49.557 58.7339 47.7048 61.3995 45.0114C64.065 42.3181 65.8817 38.9018 66.6244 35.1859C67.3671 31.4701 67.0033 27.618 65.5779 24.107ZM47.6224 44.6174C45.3834 44.6175 43.1808 44.0513 41.2194 42.9715C40.6058 42.6333 39.8946 42.516 39.205 42.6394C38.5153 42.7628 37.8889 43.1193 37.4306 43.6492L23.2155 60.0958C22.6411 60.6702 21.8621 60.9929 21.0498 60.9929C20.2374 60.9929 19.4584 60.6702 18.884 60.0958C18.3096 59.5214 17.9869 58.7424 17.9869 57.9301C17.9869 57.1178 18.3096 56.3388 18.884 55.7644L35.3412 41.56C35.872 41.1011 36.2288 40.4736 36.3518 39.7828C36.4747 39.0921 36.3563 38.38 36.0165 37.7662C34.9039 35.7487 34.3367 33.4759 34.3708 31.1722C34.4049 28.8686 35.0392 26.6136 36.211 24.6299C37.3828 22.6462 39.0517 21.0024 41.0529 19.8607C43.0541 18.719 45.3184 18.1188 47.6224 18.1194H47.8492L41.2958 25.2204C40.964 25.5803 40.7235 26.0146 40.5945 26.4868C40.4655 26.959 40.4517 27.4553 40.5544 27.9339L41.9965 34.6476C42.1202 35.2231 42.4075 35.7507 42.8238 36.1669C43.24 36.5832 43.7676 36.8704 44.3432 36.9942L51.057 38.4363C51.5357 38.5389 52.032 38.5252 52.5042 38.3961C52.9764 38.2671 53.4107 38.0266 53.7706 37.6948L60.8718 31.1442V31.371C60.8671 34.8832 59.4696 38.2501 56.9858 40.7333C54.502 43.2166 51.1347 44.6134 47.6224 44.6174Z" fill="#F85F00"/>
                        </svg>                            
                        <span>Rust Repair</span>
                    </a>
                    <a href="/maintenance" class="sp">
                        <svg width="54" height="53.35068314899154" viewBox="0 0 83 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.9501 71.75V20.5C10.9501 17.6528 11.9466 15.2326 13.9397 13.2396C15.9327 11.2465 18.3529 10.25 21.2001 10.25H34.8667C37.714 10.25 40.1341 11.2465 42.1272 13.2396C44.1202 15.2326 45.1167 17.6528 45.1167 20.5V71.75H10.9501ZM34.8667 51.25H38.2834V34.1667H34.8667V51.25ZM17.7834 64.9167H38.2834V58.0833H34.8667C32.9876 58.0833 31.3795 57.4148 30.0424 56.0778C28.7031 54.7384 28.0334 53.1292 28.0334 51.25V34.1667C28.0334 32.2875 28.7031 30.6782 30.0424 29.3389C31.3795 28.0019 32.9876 27.3333 34.8667 27.3333H38.2834V20.5C38.2834 19.5319 37.9565 18.7199 37.3028 18.0639C36.6468 17.4102 35.8348 17.0833 34.8667 17.0833H21.2001C20.232 17.0833 19.42 17.4102 18.764 18.0639C18.1103 18.7199 17.7834 19.5319 17.7834 20.5V64.9167ZM59.4667 46.3812C57.9862 46.3812 56.5341 46.1819 55.1105 45.7833C53.6869 45.3847 52.2917 44.8722 50.9251 44.2458L53.0605 37.7542C54.1994 38.2667 55.3235 38.6938 56.4327 39.0354C57.5443 39.3771 58.5841 39.5479 59.5522 39.5479C60.2355 39.5479 60.9188 39.434 61.6022 39.2063C62.2855 38.9785 62.9973 38.6368 63.7376 38.1813C65.1042 37.2132 66.4709 36.5583 67.8376 36.2167C69.2042 35.875 70.514 35.7042 71.7667 35.7042C73.1903 35.7042 74.6561 35.8887 76.164 36.2577C77.6742 36.6289 79.0841 37.1278 80.3938 37.7542L78.2584 44.2458C76.9487 43.7903 75.7392 43.3917 74.6299 43.05C73.5184 42.7083 72.564 42.5375 71.7667 42.5375C71.0834 42.5375 70.3295 42.6651 69.5049 42.9202C68.6781 43.1776 67.8091 43.6194 66.898 44.2458C65.7022 45.0431 64.4915 45.5988 63.2661 45.9132C62.0429 46.2252 60.7765 46.3812 59.4667 46.3812ZM59.5522 33.0563C58.0716 33.0563 56.591 32.8569 55.1105 32.4583C53.6299 32.0597 52.2348 31.5472 50.9251 30.9208L53.0605 24.4292C54.541 25.0556 55.7938 25.5111 56.8188 25.7958C57.8438 26.0806 58.7549 26.2229 59.5522 26.2229C60.2355 26.2229 60.9188 26.1238 61.6022 25.9257C62.2855 25.7252 62.9973 25.3688 63.7376 24.8563C65.1612 23.8882 66.5427 23.2333 67.882 22.8917C69.219 22.55 70.514 22.3792 71.7667 22.3792C73.1903 22.3792 74.614 22.5648 76.0376 22.9361C77.4612 23.3051 78.9133 23.8028 80.3938 24.4292L78.2584 30.9208C76.7779 30.4083 75.5251 29.9961 74.5001 29.684C73.4751 29.3697 72.564 29.2125 71.7667 29.2125C71.0265 29.2125 70.2725 29.3264 69.5049 29.5542C68.735 29.7819 67.866 30.2375 66.898 30.9208C65.873 31.6611 64.7204 32.2021 63.4403 32.5437C62.1579 32.8854 60.8619 33.0563 59.5522 33.0563ZM59.5522 59.7063C58.0716 59.7063 56.6059 59.5069 55.1549 59.1083C53.7017 58.7097 52.2917 58.1972 50.9251 57.5708L53.0605 51.0792C54.3133 51.6486 55.4806 52.0894 56.5626 52.4014C57.6445 52.7158 58.641 52.8729 59.5522 52.8729C60.2355 52.8729 60.9188 52.7727 61.6022 52.5723C62.2855 52.3741 62.9973 52.0187 63.7376 51.5062C65.0473 50.5951 66.4424 49.9539 67.923 49.5827C69.4035 49.2137 70.7133 49.0292 71.8522 49.0292C73.2758 49.0292 74.7279 49.2285 76.2084 49.6271C77.689 50.0257 79.0841 50.5097 80.3938 51.0792L78.2584 57.5708C76.7779 57.0583 75.5103 56.6461 74.4557 56.334C73.4033 56.0197 72.507 55.8625 71.7667 55.8625C70.9695 55.8625 70.1586 55.9901 69.3341 56.2452C68.5072 56.5026 67.6952 56.9444 66.898 57.5708C65.9299 58.2542 64.8047 58.7803 63.5223 59.1493C62.2422 59.5206 60.9188 59.7063 59.5522 59.7063ZM38.2834 64.9167V19.7723V20.5V64.9167Z" fill="#F85F00"/>
                        </svg>                            
                        <span>Air Conditioning</span>
                    </a>
                    <a href="/diagnostics" class="sp">
                        <svg width="54" height="53.2799573760341" viewBox="0 0 75 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M62.5669 12.3333H13.2336C9.84189 12.3333 7.06689 15.1083 7.06689 18.5V27.75H13.2336V18.5H62.5669V27.75H68.7336V18.5C68.7336 15.1083 65.9586 12.3333 62.5669 12.3333ZM62.5669 55.5H13.2336V46.25H7.06689V55.5C7.06689 58.8916 9.84189 61.6666 13.2336 61.6666H62.5669C65.9586 61.6666 68.7336 58.8916 68.7336 55.5V46.25H62.5669V55.5Z" fill="#F85F00"/>
                            <path d="M46.8111 23.2792C45.7627 21.1825 42.3402 21.1825 41.2919 23.2792L31.7336 42.4267L28.3111 35.6125C28.0582 35.1013 27.667 34.6713 27.1819 34.3715C26.6967 34.0717 26.1372 33.9141 25.5669 33.9167H7.06689V40.0833H23.6552L28.9586 50.7208C29.5136 51.7692 30.5619 52.4167 31.7336 52.4167C32.9052 52.4167 33.9536 51.7692 34.4777 50.7208L44.0669 31.5733L47.4894 38.3875C48.0136 39.4358 49.0619 40.0833 50.2336 40.0833H68.7336V33.9167H52.1452L46.8111 23.2792Z" fill="#F85F00"/>
                        </svg>                            
                        <span>Diagnostics</span>
                    </a>
                </nav>
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
        </div>
    </VideoBackground>
</MediaQuery>