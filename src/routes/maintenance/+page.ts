import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        title: 'Air Conditioning',
        suffix: 'East Machias, Maine',
        description: "Auto air conditioning repair in East Machias, ME. We diagnose and fix leaks, compressors and clogged filters, and offer A/C inspections and recharges.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }
}