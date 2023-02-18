<script lang="ts">
    import Header from "$lib/Header.svelte";
  import { ScrollWatcher } from "svelte-scroll-nav";
    import "../app.css";
</script>

<Header />
<ScrollWatcher />

<main>
    <slot />
</main>
