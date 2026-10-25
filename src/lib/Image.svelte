<script lang="ts">
    interface Props {
        src: string;
        alt: string;
        aspect?: string;
        width?: number | string | undefined;
        height?: number | string | undefined;
        class?: string | null;
    }

    let {
        src,
        alt,
        aspect = '16:9',
        width = 0,
        height = 0,
        class: className = null
    }: Props = $props();
    
    // For this to work, aspect NEEDS to be a value like "16:9"
    let [aspectWidth = 16, aspectHeight = 9] = $derived(aspect.split(':').map(value => Number(value)));

    let paddingBottom = $derived(!(width && height) && width ? `calc(${width} / ${aspectWidth / aspectHeight})` : 0);
    let paddingRight = $derived(!(width && height) && height ? `calc(${height} * ${aspectWidth / aspectHeight})` : 0); 

</script>

<div
    style:width
    style:height
    style:padding-right={paddingRight}
    style:padding-bottom={paddingBottom}
    class={['relative shrink-0', className].join(' ')}
>
    <img class="absolute w-full h-full object-cover" {src} {alt} />
</div>