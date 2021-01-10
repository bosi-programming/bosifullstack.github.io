<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./routes/home.svelte";
</script>

<style>
</style>

<Router>
  <main>
    <Route path="/" component={Home} />
  </main>
</Router>
