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

    <Button
      @click="detect"
      :disabled="data.image == null"
      class="text-xl mt-10"
    >
      {{ data.btnLabel }}
    </Button>

    <Login :open="modalSwitch.login" :key="modalSwitch.loginKey"></Login>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { reactive, ref } from "vue";
import { useInf } from "../stores/inf";
// import Modal from "../components/Modal.vue";

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import Login from "../components/Login.vue";

const inf = useInf();

const data = reactive({
  image: null,
  localURL: null,
  btnLabel: "Start Detecting",
});

const modalSwitch = reactive({
  login: false,
  loginKey: 1,
});

function onImageUpload(e) {
  let files = e.target.files || e.dataTransfer.files;
  data.image = files[0];

  data.localURL = URL.createObjectURL(data.image);
}

function detect() {
  if (data.image !== null) {
    if (inf.loggedIn == false) {
      modalSwitch.login = true;
      modalSwitch.loginKey = Math.random();
    } else {
      data.btnLabel = "Processing";
    }
  }
}
//
</script>
