<script>
  import { menu, cart } from "../stores/stores";

  export let id;
  export let src;
  export let name;
  export let price;

  // Se busca en el menu la pizza que se quiere agregar
  const findPizza = (id) => {
    return $menu.find((pizza) => pizza.id === id);
  };

  // Si la pizza existe, se aumenta la cantidad, sino, se agrega al carrito como nuevo item
  const add = (pizza) => {
    // Se busca si la pizza existe en el carrito
    const pizzaExist = $cart.find((item) => item.id === pizza.id);
    if (pizzaExist) {
      // Si existe se aumenta la cantidad del item
      pizzaExist.quantity++;
      // Se reasigna el valor de cart a si mismo porque los objetos no son reactivos por si mismos
      $cart = $cart;
    } else {
      // Se hace una copia del valor actual de pizzas y se le agrega una copia de la pizza a agregar para que no haga referencia a la misma pizza que se encuentra en el menu
      cart.update((pizzas) => [...pizzas, { ...pizza }]);
    }
  };
</script>

<div class="flex flex-col items-center w-1/5">
  <img {src} alt={name} />
  <p class="font-bold">{name}</p>
  <p>${price}</p>
  <button
    class="bg-red-300 font-bold px-4 py-2 rounded-md my-3"
    on:click={() => add(findPizza(id))}>Agregar</button
  >
</div>
