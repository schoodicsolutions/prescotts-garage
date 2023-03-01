<script lang="ts">
  import Footer from "$lib/Footer.svelte";
  import Header from "$lib/Header.svelte";
  import { ScrollWatcher } from "svelte-scroll-nav";
  import "../app.css";
</script>

<Header />

<ScrollWatcher />

<main>
    <slot />
</main>

<Footer />
