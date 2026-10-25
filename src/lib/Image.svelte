<script lang="ts">
    interface Props {
        src: string;
        alt: string;
        // A ratio like "16:9"
        aspect?: string;
        loading?: 'lazy' | 'eager';
        class?: string | null;
    }

    let {
        src,
        alt,
        aspect = '16:9',
        loading = 'lazy',
        class: className = null
    }: Props = $props();
</script>

<img
    {src}
    {alt}
    {loading}
    decoding="async"
    style:aspect-ratio={aspect.replace(':', ' / ')}
    class={['w-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10', className].filter(Boolean).join(' ')}
/>
