<script lang="ts">
  import Footer from "#lib/Footer.svelte";
  import Header from "#lib/Header.svelte";
  import Meta from "#lib/Meta.svelte";
  import { ScrollWatcher } from "svelte-scroll-nav";
  import "../app.css";
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Meta />

<Header />

<ScrollWatcher />

<main>
    {@render children?.()}
</main>

<Footer />
