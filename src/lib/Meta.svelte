<script>
	import { page } from '$app/state';
    import { PUBLIC_BASEURL } from '$app/env/public';

    let titleString = $derived([
        page.data.title,
        'Prescott\'s Garage',
        page.data.suffix
    ].filter(v => !!v).join(' | '));

    // Crawlers need an absolute URL; fall back to the home page's card
    let image = $derived(`${PUBLIC_BASEURL}${page.data.image || '/og/home.jpg'}`);
</script>

<svelte:head>
    <title>{titleString}</title>
    {#if page.data.description}
        <meta name="description" content={page.data.description} />
        <meta property="og:description" content={page.data.description} />
    {/if}
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Prescott's Garage" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:title" content={titleString} />
    <meta property="og:image" content={image} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content={`${page.data.title || 'Prescott\'s Garage'}, auto repair in East Machias, Maine`} />
    <meta name="twitter:card" content="summary_large_image" />
    {#if page.data.canonical}
        <meta property="og:url" content={page.data.canonical} />
        <link rel="canonical" href={page.data.canonical} />
    {/if}
</svelte:head>
