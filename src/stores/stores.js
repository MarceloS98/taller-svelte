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
