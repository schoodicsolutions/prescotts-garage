import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

// "*" already allows everyone; naming the AI search and assistant crawlers
// makes the welcome explicit so none of them treat the site as off-limits
const AI_CRAWLERS = [
    'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
    'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
    'PerplexityBot', 'Perplexity-User',
    'Google-Extended', 'Applebot', 'Applebot-Extended',
    'Bingbot', 'DuckAssistBot', 'Amazonbot', 'Meta-ExternalAgent', 'MistralAI-User', 'CCBot',
];

export function GET() {
    const body = [
        'User-agent: *',
        'Allow: /',
        '',
        ...AI_CRAWLERS.map((agent) => `User-agent: ${agent}`),
        'Allow: /',
        '',
        `Sitemap: ${PUBLIC_BASEURL}/sitemap.xml`,
        '',
    ].join('\n');
    return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
