<template>
  <div class="q-pa-md q-gutter-sm">Msg: {{ msg }}</div>
  <div class="q-pa-md q-gutter-sm">Title: {{ title }}</div>
  <div class="q-pa-md q-gutter-sm">Result: {{ result }}</div>
  <div class="q-pa-md q-gutter-sm">xx: {{ xx }}</div>
</template>

<script lang="ts" setup>
import { ITodo } from '@/types/todo';
// import { $ref } from 'vue/macros';
let msg = $ref('Test');
let title = $ref('title');
let todo = $ref<ITodo>({ Id: '0x' });

onMounted(() => console.log('ok'));
const xx = $computed(() => todo.Id + 'tttttt');
const result = computed(() => msg + '_' + title);
console.log(todo);
</script>
