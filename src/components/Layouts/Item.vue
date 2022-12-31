<template>
  <q-item
    icon="home"
    style="min-height: 42px"
    clickable
    :inset-level="level"
    class="m-1 rounded-r-sm"
    :class="isActive() ? 'bg-sky-100 border-l-4 border-sky-600' : ''"
    :to="rootPath + childrenPath">
    <q-item-section avatar v-if="menu.icon" style="min-width: 0px">
      <q-icon color="primary" :name="menu.icon" />
    </q-item-section>
    <q-item-section class="transition hover:scale-105 ease-in duration-300">{{ menu.label }}</q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { IDrawer } from '@/types/Layouts';
const props = defineProps<{
  rootPath: string;
  childrenPath?: string;
  level: number;
  menu: IDrawer;
}>();
const route = useRoute();
const isActive = () => route.path === `${props.rootPath}${props.childrenPath}`;
</script>
