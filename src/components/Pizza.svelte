<script>
  import Button from "./Button.svelte";

  export let id;
  export let src;
  export let name;
  export let price;
</script>

<div class="flex flex-col items-center w-1/5">
  <img {src} alt={name} />
  <p class="font-bold">{name}</p>
  <p>${price}</p>
  <Button {id} />
</div>
