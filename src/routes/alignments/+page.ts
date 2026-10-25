import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        title: 'Alignments',
        suffix: 'East Machias, Maine',
        description: "Wheel alignments in East Machias, ME. We inspect your suspension, steering and tires, then align to manufacturer specs for better handling and tire life.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`,
        image: '/og/alignments.jpg'
    }
}
