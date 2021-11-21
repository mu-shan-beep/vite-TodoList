<template>
  <div>
    <h1 @click="add">{{ count }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({});//父组件传值

let count = ref(1);
function add() {
  count.value++;

}


</script>


<style scoped>
h1 {
  color: red;
}
</style>
