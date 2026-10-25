import fs from 'fs';

import { PUBLIC_BASEURL } from '$app/env/public';

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
        description: "Custom car builds from Prescott's Garage in East Machias, Maine. Browse photos of custom and performance work from our shop, then tell us about your project.",
        canonical: `${PUBLIC_BASEURL}${url.pathname}`,
        image: '/og/customs.jpg'
    }
}

