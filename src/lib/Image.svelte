<script lang="ts">
    export let src: string;
    export let alt: string | undefined = undefined;
    export let aspect: string = '16:9';
    export let width: number | string | undefined = 0;
    export let height: number | string | undefined = 0;
    let className: string | null = null;
    export { className as class};
    // For this to work, aspect NEEDS to be a value like "16:9"
    $: [aspectWidth = 16, aspectHeight = 9] = aspect.split(':').map(value => Number(value));

    $: paddingBottom = !(width && height) && width ? `calc(${width} / ${aspectWidth / aspectHeight})` : 0;
    $: paddingRight = !(width && height) && height ? `calc(${height} * ${aspectWidth / aspectHeight})` : 0; 

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