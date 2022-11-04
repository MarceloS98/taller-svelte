// Traemos las pizzas de la API y exportamos el resultado

const url = "https://ig-food-menus.herokuapp.com/pizzas?_limit=20";

async function getPizzas() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export let pizzas = await getPizzas();
