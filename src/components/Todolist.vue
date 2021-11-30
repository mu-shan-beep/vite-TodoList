<template>
  <div>
    <input type="text" name id v-model="title" @keydown.enter="addTodo" />
    <input type="button" @click="clear" value="清理" />

    <ul v-if="todos.length">
      <transition-group name="flip-list" tag="ul">
        <li v-for="todo in todos" :key="todo">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
          <span class="remove-btn" @click="removeTodo($event, i)">❌</span>
        </li>
      </transition-group>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox" name="" id="" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>
  </div>

  <transition name="fade">
    <div class="info-wrapper" v-if="showModel">
      <div class="info">哥，你啥也没输</div>
    </div>
  </transition>

  <span class="dustbin"> 🗑 </span>
  <div class="animate-wrap">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
    >
      <div class="animate" v-show="animate.show">📋</div>
    </transition>
  </div>
</template>

<script setup>
import { useTodos } from "../utils/useTodoList";
import { computed, reactive, ref } from "vue";

let {
  title,
  todos,
  addTodo,
  clear,
  active,
  all,
  allDone,
  showModel,
  removeTodo,
  beforeEnter,
  enter,
  afterEnter,
  animate,
} = useTodos();

/* // defineProps({});//父组件传值
let title = ref("");
let todos = reactive([{ title: "学习Vue", done: false }]);

function addTodo() {
  todos.push({
    title: title.value,
    done: false,
  });
  title.value = "";
}

function clear() {
  todos = todos.value.filter((v) => !v.done);
}

// 过滤出来的未被选中的
let active = computed(() => {
  return todos.filter((v) => !v.done).length;
});

// 列表的长度
let all = computed(() => todos.length);

// 全选
let allDone = computed({
  get: function () {
    return active.value === 0;
  },
  set: function (val) {
    todos.forEach((todo) => {
      todo.done = val;
    });
  },
});

// let count = ref(1);
// function add() {
//   count.value++;
// } */
</script>


<style scoped>
.info-wrapper {
  position: fixed;
  top: 20px;
  width: 200px;
}
.info {
  padding: 20px;
  color: white;
  background: #d88986;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}

.fade-enter-active {
  transition: all 0.3s ease;
}

.fade-leave-to {
  opacity: 1;
  transform: translateY(-60px);
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.flip-list-move {
  transition: transform 0.8s ease;
}
.flip-list-enter-active,
.flip-list-leave-active {
  transition: all 1s ease;
}
.flip-list-enter-from,
.flip-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.animate-wrap .animate {
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 100;
  transition: all 0.5s linear;
}
</style>
