import fs from 'fs';

import { PUBLIC_BASEURL } from '$env/static/public';

export const prerender = true;

export async function load({ url }: { url: URL }) {
    const dir = await fs.promises.readdir('./static/img/gallery');
    const images = dir.filter(
        (filename) => filename.slice(-5).toLowerCase() === '.webp'
    ).map(
        (filename) => '/img/gallery/' + filename
    );
    return {
        images,
        title: 'Customs',
        suffix: 'East Machias, Maine',
        description: 'Your Go-To Auto Body Shop for Top-Quality Repairs and Services. Trust Our Experienced Technicians for all Your Vehicle Needs. Contact Us Today!',
        canonical: `${PUBLIC_BASEURL}${url.pathname}`
    }
}

