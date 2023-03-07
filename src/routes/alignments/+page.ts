import { PUBLIC_BASEURL } from '$env/static/public';

export const prerender = true;

export function load({ url }: { url: URL }) {
    return {
        title: 'Alignments',
        suffix: 'East Machias, Maine',
        description: 'Your Go-To Auto Body Shop for Top-Quality Repairs and Services. Trust Our Experienced Technicians for all Your Vehicle Needs. Contact Us Today!',
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }
}