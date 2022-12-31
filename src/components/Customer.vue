<template>
  <div class="q-pa-md q-gutter-sm">Count: {{ counter.counter }}</div>
  <div class="q-pa-md q-gutter-sm">Msg: {{ msg }}</div>
  <div class="q-pa-md q-gutter-sm">Title: {{ title }}</div>
  <div class="q-pa-md q-gutter-sm">Result: {{ result }}</div>
</template>

<script lang="ts" setup>
import { ITodo } from '@/types/todo';
const counter = useCounterStore();
const msg = $ref('Test');
onMounted(() => console.log('ok'));
let title = $ref('title');
const result = computed(() => {
  return msg + '_' + title;
});
let todo = $ref<ITodo>({ Id: '01' });
console.log(todo);
</script>
