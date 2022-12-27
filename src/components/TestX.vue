<script setup>
const msg = $ref('Test');
onMounted(() => console.log('ok'));
let title = $ref('title');
const result = computed(() => {
  return msg + '_' + title;
});
</script>

<template>
  <div class="q-pa-md q-gutter-sm">Msg: {{ msg }}</div>
  <div class="q-pa-md q-gutter-sm">Title: {{ title }}</div>
  <div class="q-pa-md q-gutter-sm">Result: {{ result }}</div>
</template>
