<script>
  import { cart } from "../stores/stores";

  const removeCartPizza = (id) => {
    cart.update(($cart) => $cart.filter((pizza) => pizza.id !== id));
  };

  // Monto total que deriva del carrito.
  /**
   * Por cada item se multiplica quantity * price
   * El resultante es la suma de los resultados de todos los items, los cuales se van acumulando en 'total'
   **/
  const calcTotal = ($cart) => {
    return $cart.reduce(
      (total, pizza) => total + pizza.price * pizza.quantity,
      0
    );
  };
</script>

<div>
  <h2 class="text-2xl font-bold mb-2">Items</h2>

  {#if $cart.length == 0}
    <p>El carrito está vacío</p>
  {/if}

  {#each $cart as { id, name, price, quantity }}
    <div class="flex gap-3 mb-1">
      <button
        class="bg-red-500 font-bold text-white w-6 h-6 rounded-full"
        on:click={() => removeCartPizza(id)}>X</button
      >
      <p>{name} <strong>${price}</strong> ({quantity})</p>
    </div>
  {/each}

  <h2 class="text-2xl font-bold mt-3 mb-2">Total</h2>
  <p class="text-xl">${calcTotal($cart) ? calcTotal($cart).toFixed(2) : 0}</p>
</div>
