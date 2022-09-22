<template>
  <div class="min-w-screen min-h-screen">
    <Header> </Header>
    <RouterView></RouterView>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
