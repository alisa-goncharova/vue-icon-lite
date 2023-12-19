<script setup>

import {ref} from "vue";
import axios from 'axios';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  className: {
    type: String,
    default: ''
  }
})

const svgFiles = ref([])
const setSize = (data) => {
  const width = /width="\d{0,5}"/gm;
  const height = /height="\d{0,5}"/gm;
  return data
      .replace(width, `width="${props.size}"`)
      .replace(height, `height="${props.size}"`);
}
const getFileNames = async() => {
  axios
      .get( `/icons/${props.name}.svg`)
      .then(res => {
        svgFiles.value = setSize(res.data)
      })
      .catch(error => console.log(error))
}
getFileNames()
</script>

<template>
  <div v-html="svgFiles" :class="className"></div>
</template>

<style scoped>
</style>