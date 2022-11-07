<script>
  import { menu } from "../stores/stores";
  import Pizza from "./Pizza.svelte";
</script>

<div class="flex flex-wrap gap-5 w-2/3 justify-center">
  {#each $menu as { id, img: src, name, price } (id)}
    <Pizza {src} {name} {price} {id} />
  {/each}
</div>
