import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        title: 'Diagnostics',
        suffix: 'East Machias, Maine',
        description: "Vehicle diagnostics in East Machias, ME. Check engine light or strange noises? We find the root cause and give you a clear report before any repair.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }
}