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
  class={[className, 'inline-block'].join('')}
  viewBox="0 0 24 24"
>
  {@render children?.()}
</svg>