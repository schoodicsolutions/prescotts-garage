<script lang="ts">
  import { page } from "$app/stores";
  import { LightboxGallery, GalleryThumbnail, GalleryImage } from "svelte-lightbox";
  const images = $page.data.images as string[];
</script>
<main class = 'bg-black'>
    <div class = {`w-full flex justify-center items-center min-h-[200px] bg-[url('/img/gallery/8162.webp')] bg-center bg-no-repeat`}>
        <div class = 'w-full min-h-[200px] flex justify-center items-center bg-black/50'>
            <h1 class = 'font-kameron sm:text-5xl lg:text-7x text-white'>Customs</h1>
        </div>
    </div>
    <div class="columns-1 sm:columns-2 xl:columns-3 gap-4 px-4 py-12">
        <LightboxGallery>
            <svelte:fragment slot="thumbnail">
                {#each images as src, index}
                    <GalleryThumbnail id={index}>
                        <img {src} class="mb-4" alt="" />
                    </GalleryThumbnail>
                {/each}
            </svelte:fragment>
            {#each images as src}
                <GalleryImage>
                    <img {src} class="mb-4" alt="" />
                </GalleryImage>
            {/each}
        </LightboxGallery>
    </div>
</main>