<script setup>

import Navbar from "./components/Navbar.vue";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer.vue";


  components: { Navbar,Footer }
</script>

<template>
<navbar/>
  <RouterView />
      <Footer />

</template>
<style>
*{
    font-family: 'El Messiri', sans-serif;

}
</style>
