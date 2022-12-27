<script lang="ts" setup>
const counter = useCounterStore();
// const router = useRouter();
const msg = $ref('Test');
onMounted(() => console.log('ok'));
let title = $ref('title');
const result = computed(() => {
  return msg + '_' + title;
});
let todo = $ref<ITodo>();
console.log(todo);
</script>

<template>
  <!-- <div class="q-pa-md q-gutter-sm">double: {{ foo.double }}</div> -->
  <div class="q-pa-md q-gutter-sm">Count: {{ counter.counter }}</div>
  <div class="q-pa-md q-gutter-sm">Msg: {{ msg }}</div>
  <div class="q-pa-md q-gutter-sm">Title: {{ title }}</div>
  <div class="q-pa-md q-gutter-sm">Result: {{ result }}</div>
</template>
