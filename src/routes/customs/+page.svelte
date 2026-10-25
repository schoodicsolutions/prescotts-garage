<script lang="ts">
  import PageBanner from "#lib/PageBanner.svelte";
  import { LightboxGallery, GalleryThumbnail, GalleryImage } from "svelte-lightbox";
  let { data } = $props();
  const images = $derived(data.images);
</script>

<PageBanner title="Customs" image="/img/gallery/8162.webp" />

<div class="mx-auto max-w-screen-2xl columns-1 sm:columns-2 xl:columns-3 gap-4 px-5 sm:px-8 py-12">
    <LightboxGallery>
        <svelte:fragment slot="thumbnail">
            {#each images as src, index}
                <GalleryThumbnail id={index}>
                    <img {src} loading="lazy" decoding="async" class="mb-4 w-full rounded-xl ring-1 ring-white/10 transition hv:hover:brightness-110" alt="" />
                </GalleryThumbnail>
            {/each}
        </svelte:fragment>
        {#each images as src}
            <GalleryImage>
                <img {src} alt="" />
            </GalleryImage>
        {/each}
    </LightboxGallery>
</div>
