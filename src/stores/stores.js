import { writable, derived, readable } from "svelte/store";
import { pizzas } from "./menu";

// Store con base en el array pizzas de la API
export let pizzasStore = readable(pizzas);

// Menu derivado de pizzaStore. Se le agrega cantidad
export let menu = derived(pizzasStore, ($pizzas) => {
  return $pizzas.map((pizza) => {
    return { ...pizza, quantity: 1 };
  });
});

// Carrito
export let cart = writable([]);

// Monto total que deriva del carrito.
/**
 * Por cada item se multiplica quantity * price
 * El resultante es la suma de los resultados de todos los items, los cuales se van acumulando en 'total'
 **/
export let total = derived(cart, ($cart) => {
  return $cart.reduce(
    (total, pizza) => total + pizza.price * pizza.quantity,
    0
  );
});
