<template>
  <div class="q-pa-md q-gutter-sm">Msg: {{ msg }}</div>
  <div class="q-pa-md q-gutter-sm">Title: {{ title }}</div>
  <div class="q-pa-md q-gutter-sm">Result: {{ result }}</div>
</template>

<script lang="ts" setup>
import { ITodo } from '@/types/todo';

let msg = $ref('Test');
let title = $ref('title');
let todo = $ref<ITodo>({ Id: '01' });

onMounted(() => console.log('ok'));
const result = computed(() =>  msg + '_' + title);
console.log(todo);
</script>
