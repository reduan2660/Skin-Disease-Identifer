<template>
  <div
    class="flex flex-col items-center justify-center min-w-full min-h-full mt-20"
  >
    <input
      type="file"
      id="imgupload"
      class="hidden"
      accept="image/*"
      @change="onImageUpload"
    />
    <label for="imgupload">
      <div
        class="shadow-lg p-40 rounded-lg text-2xl text-gray-600 cursor-pointer mx-10 sm:mx-0 text-center"
        @drop.prevent="onDrop"
        :style="
          'background-image: url(' +
          data.localURL +
          '); background-size: cover; background-position: center'
        "
      >
        <span v-if="data.localURL == null">
          Click to upload an image here.</span
        >
      </div></label
    >

    <Button :disabled="data.image == null" class="text-xl mt-10">
      Start Detecting
    </Button>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { reactive, ref } from "vue";

const data = reactive({
  image: null,
  localURL: null,
});

function onImageUpload(e) {
  let files = e.target.files || e.dataTransfer.files;
  data.image = files[0];

  data.localURL = URL.createObjectURL(data.image);
}
</script>
