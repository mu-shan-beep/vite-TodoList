<template>
  <!-- <Rate @update-rate="update" :value="score" :theme="red"></Rate> -->pm
  <Rate v-model="score" :theme="red"> 课程评分 </Rate>
</template>

<script  setup>
import { ref } from "@vue/reactivity";
import Rate from "../components/Rate.vue";

let score = ref(2);

</script>