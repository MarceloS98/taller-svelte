<script>
  import { menu } from "../stores/stores";
  import Product from "./Product.svelte";
</script>

<div class="flex flex-wrap gap-5 w-2/3 justify-center">
  {#each $menu as { id, img: src, name, price } (id)}
    <Product {src} {name} {price} {id} />
  {/each}
</div>
