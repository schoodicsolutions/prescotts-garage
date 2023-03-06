<script>
    import Gallery from 'svelte-image-gallery'
    let imgs = [
        '45',
        '79',
        '163',
        '0633',
        '741',
        '2315',
        '2530',
        '3076',
        '3664',
        '3732',
        '4210',
        '4241',
        '4844',
        '5619',
        '6343',
        '6690',
        '6900',
        '7049',
        '8136'
    ]
</script>
<main class = 'bg-black'>
    <div class = {`w-full flex justify-center items-center min-h-[200px] bg-[url('/img/8162.webp')] bg-center bg-no-repeat`}>
        <div class = 'w-full min-h-[200px] flex justify-center items-center bg-black/50'>
            <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Customs</h1>
        </div>
    </div>
    <div class = 'max-w-screen-xl m-auto px-3 py-5'>
        <Gallery>
            {#each imgs as img}
                <img src = {`img/${img}.webp`} alt = 'In gallery'/>
            {/each}
        </Gallery>
    </div>
</main>