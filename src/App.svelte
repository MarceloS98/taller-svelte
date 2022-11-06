<script>
  import Menu from "./components/Menu.svelte";
  import Summary from "./components/Summary.svelte";

  import { cart } from "./stores/stores";

  $cart;
</script>

<h1 class="text-4xl font-bold text-center my-10">Pizzeria Don Chelo</h1>

<div class="flex">
  <Menu />
  <Summary />
</div>
