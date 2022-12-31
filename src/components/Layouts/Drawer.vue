<template>
  <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
    <div class="w-full">
      <div class="flex flex-col items-center">
        <img class="w-16 h-16 mb-2 rounded-full" src="https://cdn.quasar.dev/img/boy-avatar.png" alt="profile" />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Js.Dev</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">0000000000</span>
      </div>
    </div>
  </q-img>
  <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px">
    <div v-for="(menu, index) in menus" :key="index + menu.path">
      <q-list class="border-b border-b-slate-50" v-if="!menu?.childrens">
        <LayoutsItem :rootPath="menu.path" :childrenPath="''" :level="0.0" :menu="menu" />
      </q-list>
      <q-list class="border-b border-b-gray-100" v-else>
        <LayoutsExpansion :rootPath="menu.path" :menu="menu" />
      </q-list>
    </div>
  </q-scroll-area>
</template>

<script setup lang="ts">
const { menus } = useDrawer();
</script>
