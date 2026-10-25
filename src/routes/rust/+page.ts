import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        title: 'Rust Repair',
        suffix: 'East Machias, Maine',
        description: "Rust repair and prevention in East Machias, ME. From fender spots to undercarriage damage, plus undercoating and rust inhibitors to stop corrosion.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`,
        image: '/og/rust.jpg'
    }
}