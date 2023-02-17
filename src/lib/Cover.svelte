<script>
  import { fade } from "svelte/transition";
</script>

<div aria-hidden class="bg-black/50 fixed w-screen h-screen z-40" in:fade={{duration: 100}} out:fade={{duration: 100}}/>