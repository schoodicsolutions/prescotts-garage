<script lang="ts">
  interface Props {
    width?: string | number | null | undefined;
    height?: string | number | null | undefined;
    class: string | null | undefined;
    children?: import('svelte').Snippet;
  }

  let {
    width = '24px',
    height = '24px',
    class: className,
    children
  }: Props = $props();
    
</script>

<svg
  {width}
  {height}
  class={['inline-block shrink-0', className].filter(Boolean).join(' ')}
  aria-hidden="true"
  viewBox="0 0 24 24"
>
  {@render children?.()}
</svg>