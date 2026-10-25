import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

export function GET() {
    return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${PUBLIC_BASEURL}/sitemap.xml\n`, {
        headers: { 'Content-Type': 'text/plain' }
    });
}
