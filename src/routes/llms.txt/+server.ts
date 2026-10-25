import { ADDRESS, HOURS, PHONE_DISPLAY, SERVICES, SERVICES_DROPDOWN_ITEMS, GOOGLE_MAPS_HREF } from '#constants';
import { BUSINESS_DESCRIPTION } from '#lib/schema.ts';
import { PUBLIC_BASEURL } from '$app/env/public';

export const prerender = true;

// llms.txt (https://llmstxt.org): a plain summary of the business for AI assistants
function formatHour(hour: number) {
    return `${hour % 12 || 12} ${hour < 12 ? 'AM' : 'PM'}`;
}

export function GET() {
    const hours = HOURS.map(({ day, open, close }) =>
        `- ${day}: ${open !== undefined && close !== undefined ? `${formatHour(open)} – ${formatHour(close)}` : 'Closed'}`
    );
    const body = [
        "# Prescott's Garage",
        '',
        `> ${BUSINESS_DESCRIPTION}`,
        '',
        '## Contact',
        '',
        `- Phone: ${PHONE_DISPLAY}`,
        `- Address: ${ADDRESS}`,
        `- Map: ${GOOGLE_MAPS_HREF}`,
        `- Website: ${PUBLIC_BASEURL}/`,
        '',
        '## Hours (Eastern Time)',
        '',
        ...hours,
        '',
        '## Services',
        '',
        ...SERVICES.map((service) => `- ${service}`),
        '',
        '## Service Pages',
        '',
        ...SERVICES_DROPDOWN_ITEMS.map(({ label, pathname }) => `- [${label}](${PUBLIC_BASEURL}${pathname})`),
        '',
    ].join('\n');
    return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
