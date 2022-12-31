<template>
  <q-expansion-item header-style="min-height:42px" header-class="q-hoverable-remove">
    <template v-slot:header>
      <q-item-section
        :class="isActive ? 'text-sky-600 font-bold' : 'text-black'"
        class="transition hover:scale-105 ease-in duration-300">
        {{ menu.label }}
      </q-item-section>
    </template>
    <LayoutsItem
      v-for="children in menu.childrens"
      :rootPath="rootPath"
      :childrenPath="children.path"
      :level="0.1"
      :menu="children"
      :key="children.label + children.path" />
  </q-expansion-item>
</template>

<script setup lang="ts">
import { IDrawer } from '@/types/layout';
const props = defineProps<{ rootPath: string; menu: IDrawer }>();
const route = useRoute();
let isActive = $ref(false);
watchEffect(() => (isActive = route.path.startsWith(props.rootPath)));
</script>
