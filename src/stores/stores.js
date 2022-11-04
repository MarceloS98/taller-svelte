import { writable, derived, readable } from "svelte/store";
import { pizzas } from "./menu";

// Creamos el store con base en el array pizzas
export let menu = readable(pizzas);

// Crear store para carrito

// Crear funcion para agregar item al carrito con el boton agregar

// Cambiar la logica para que deduzca el total a partir del carrito y ya no del menu
export let total = derived(menu, ($menu) => {
  let precioTotal = $menu.reduce((total, pizza) => total + pizza.price, 0);
  return precioTotal;
});
