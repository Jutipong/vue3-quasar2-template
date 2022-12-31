<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated class="text-white bg-primary">
      <q-toolbar>
        <q-btn flat dense round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="toggleLeftDrawer" />
        <q-space />
        <q-btn
          class="hover:bg-red-600"
          align="around"
          :label="$q.screen.gt.sm ? 'Logout' : ''"
          flat
          icon="logout"></q-btn>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="260">
      <LayoutsDrawer />
    </q-drawer>
    <!-- end drawer -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
let leftDrawerOpen = $ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen = !leftDrawerOpen);
// const route = useRoute();
</script>
