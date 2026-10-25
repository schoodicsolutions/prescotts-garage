import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        suffix: 'Auto Repair in East Machias, Maine',
        description: "Honest, reliable auto repair in East Machias, Maine since 2005. Oil changes, state inspections, brakes, tires, alignments, rust repair and more.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`,
        image: '/og/home.jpg'
    }
}
