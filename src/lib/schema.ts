import { GOOGLE_MAPS_HREF, HOURS, SERVICES, SERVICES_DROPDOWN_ITEMS } from "#constants";
import { PUBLIC_BASEURL } from "$app/env/public";

// schema.org structured data, shared by the pages and llms.txt so every
// crawler gets the same facts about the business

export const BUSINESS_ID = `${PUBLIC_BASEURL}/#business`;
const WEBSITE_ID = `${PUBLIC_BASEURL}/#website`;

export const BUSINESS_DESCRIPTION =
    "Prescott's Garage is a family-owned and operated auto repair shop in East Machias, Maine, " +
    "founded by Harold Prescott in 2005. Harold and his son work in the shop every day, " +
    "providing reliable, honest auto repair for the Greater Machias area, from routine " +
    "maintenance to complex repairs.";

const harold = {
    '@type': 'Person',
    '@id': `${PUBLIC_BASEURL}/#harold`,
    name: 'Harold Prescott',
    jobTitle: 'Owner',
};

const hoursSpecification = HOURS
    .filter(({ open, close }) => open !== undefined && close !== undefined)
    .map(({ day, open, close }) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: day,
        opens: `${String(open).padStart(2, '0')}:00`,
        closes: `${String(close).padStart(2, '0')}:00`,
    }));

export const business = {
    '@type': 'AutoRepair',
    '@id': BUSINESS_ID,
    name: "Prescott's Garage",
    description: BUSINESS_DESCRIPTION,
    url: `${PUBLIC_BASEURL}/`,
    image: `${PUBLIC_BASEURL}/og/home.jpg`,
    logo: `${PUBLIC_BASEURL}/apple-touch-icon.png`,
    telephone: '+1-207-259-3360',
    foundingDate: '2005',
    slogan: 'Family owned & operated since 2005',
    founder: harold,
    address: {
        '@type': 'PostalAddress',
        streetAddress: '67 Main St',
        addressLocality: 'East Machias',
        addressRegion: 'ME',
        postalCode: '04630',
        addressCountry: 'US',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 44.7488,
        longitude: -67.3563,
    },
    hasMap: GOOGLE_MAPS_HREF,
    areaServed: [
        { '@type': 'City', name: 'East Machias, Maine' },
        { '@type': 'City', name: 'Machias, Maine' },
        { '@type': 'Place', name: 'Machias Bay Area, Maine' },
    ],
    openingHoursSpecification: hoursSpecification,
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Auto Repair Services',
        itemListElement: SERVICES.map((name) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
        })),
    },
    makesOffer: SERVICES_DROPDOWN_ITEMS.map(({ label, pathname }) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: label, url: `${PUBLIC_BASEURL}${pathname}` },
    })),
};

export const website = {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: "Prescott's Garage",
    url: `${PUBLIC_BASEURL}/`,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
};

export function servicePage({ name, description, pathname }: { name: string; description?: string; pathname: string }) {
    const url = `${PUBLIC_BASEURL}${pathname}`;
    return [
        {
            '@type': 'Service',
            '@id': `${url}#service`,
            name,
            serviceType: name,
            description,
            url,
            provider: { '@id': BUSINESS_ID },
            areaServed: business.areaServed,
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${PUBLIC_BASEURL}/` },
                { '@type': 'ListItem', position: 2, name, item: url },
            ],
        },
    ];
}

// Escape "<" so the JSON can't close the script tag early
export function toJsonLd(nodes: object[]) {
    return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
