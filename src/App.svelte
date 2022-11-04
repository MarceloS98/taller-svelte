<script>
  import "./stores/menu";
  import { menu, total } from "./stores/stores";
</script>

<!-- 
    $ => 'Autosuscripción' 
    Es un prefix que se usa para acceder a los datos del store que estamos referenciando
    Se suscribe y desuscribe automáticamente
-->

<h1 class="text-4xl font-bold text-center my-10">Pizzeria Don Chelo</h1>

<!-- Gral container -->
<div class="flex">
  <!-- Pizzas menu -->
  <div class="flex flex-wrap gap-5 w-2/3 justify-center">
    {#each $menu as { id, img: src, name, price } (id)}
      <div class="flex flex-col items-center w-1/5">
        <img {src} alt={name} />
        <p class="font-bold">{name}</p>
        <p>${price}</p>
        <button class="bg-red-300 font-bold px-4 py-2 rounded-md my-3"
          >Agregar</button
        >
      </div>
    {/each}
  </div>
  <!-- End of Pizzas menu -->

  <!-- Summary -->
  <div>
    <h2 class="text-2xl font-bold">Items</h2>
    <p />
    <h2 class="text-2xl font-bold">Total</h2>
    <p class="text-xl">${$total}</p>
  </div>
  <!-- End of Summary -->
</div>
