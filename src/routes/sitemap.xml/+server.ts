import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

const PAGES = ['/', '/customs', '/alignments', '/rust', '/maintenance', '/diagnostics'];

export function GET() {
    const urls = PAGES.map((path) => `  <url><loc>${PUBLIC_BASEURL}${path}</loc></url>`).join('\n');
    return new Response(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        { headers: { 'Content-Type': 'application/xml' } }
    );
}
