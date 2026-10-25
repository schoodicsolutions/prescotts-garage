<script lang="ts">
    import { toJsonLd } from "./schema";

    interface Props {
        nodes: object[];
    }

    let { nodes }: Props = $props();
</script>

<svelte:head>
    {@html `<script type="application/ld+json">${toJsonLd(nodes)}</script>`}
</svelte:head>
