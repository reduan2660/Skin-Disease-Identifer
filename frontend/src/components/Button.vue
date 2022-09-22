<template>
  <div
    :class="
      disabled
        ? 'bg-gray-500 px-10 py-2 rounded text-white cursor-not-allowed'
        : 'bg-blue-500 px-10 py-2 rounded text-white cursor-pointer'
    "
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
