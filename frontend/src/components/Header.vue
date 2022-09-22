<template>
  <div class="flex items-center justify-between mx-10 py-4 text-xl font-bold">
    <div>Skin Disease Recognition</div>
    <div>
      <Button>
        <span v-if="inf.loggedIn == false">Login</span>
        <span v-else>Alve Reduan</span>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import { useInf } from "../stores/inf";

const inf = useInf();
</script>
