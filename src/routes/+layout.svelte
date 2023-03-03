<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import Meta from "$lib/Meta.svelte";
  import { ScrollWatcher } from "svelte-scroll-nav";
  import "../app.css";
</script>

<Meta />

<Header />

<ScrollWatcher />

<main>
    <slot />
</main>

<Footer />
