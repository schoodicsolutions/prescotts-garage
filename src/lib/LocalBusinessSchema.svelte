<script lang="ts">
    import { HOURS } from "#constants";
    import { PUBLIC_BASEURL } from "$app/env/public";

    // schema.org structured data so search engines can show address, phone and hours
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        '@id': `${PUBLIC_BASEURL}/#business`,
        name: "Prescott's Garage",
        url: `${PUBLIC_BASEURL}/`,
        image: `${PUBLIC_BASEURL}/og/home.jpg`,
        logo: `${PUBLIC_BASEURL}/apple-touch-icon.png`,
        telephone: '+1-207-259-3360',
        foundingDate: '2005',
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
        areaServed: 'Machias Bay Area, Maine',
        openingHoursSpecification: HOURS
            .filter(({ open, close }) => open !== undefined && close !== undefined)
            .map(({ day, open, close }) => ({
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: day,
                opens: `${String(open).padStart(2, '0')}:00`,
                closes: `${String(close).padStart(2, '0')}:00`,
            })),
    };

    // Escape "<" so the JSON can't close the script tag early
    const json = JSON.stringify(schema).replace(/</g, '\\u003c');
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${json}</script>`}
</svelte:head>
