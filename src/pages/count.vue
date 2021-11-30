<template>
  <div>
    <button @click="add">点击增加</button>
    count:{{ count }}*2 ={{ double }}
    <div>
      <h3>手写迷你VueX测试</h3>
      <button @click="asyncAdd">async add</button>
    </div>
  </div>
</template>

<script setup>
// import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { useStore } from "../utils/VueX/index";

let store = useStore();

let double = computed(() => store.getters.double);

let count = computed(() => store.state.count);
function add() {
  store.commit("add", "123");
}

function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>
