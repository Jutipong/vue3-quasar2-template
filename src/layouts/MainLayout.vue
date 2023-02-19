<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated class="text-white bg-primary">
      <q-toolbar>
        <q-btn flat dense round :icon="leftDrawerOpen ? 'menu_open' : 'menu'" @click="toggleLeftDrawer" />
        <q-space />

        <q-space />
        <!-- <toolbar-item-right /> -->
        <!-- <ToolbarItemRight class="q-mr-sm" /> -->

        <q-btn
          class="hover:bg-red-600"
          align="around"
          :label="$q.screen.gt.sm ? 'Logout' : ''"
          flat
          icon="logout"
          @click="logout()"></q-btn>
      </q-toolbar>
    </q-header>

    <!-- drawer -->
    <!-- <q-drawer v-model="leftDrawerOpen" show-if-above bordered :width="270">
      <LayoutsDrawer />
    </q-drawer> -->
    <!-- end drawer -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const { dialog } = useQuasar();
const $router = useRouter();
let leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => (leftDrawerOpen.value = !leftDrawerOpen);
const logout = () => {
  dialog({
    html: true,
    title: '<div class="text-red"> Confirm logout</div>',
    message: 'Are you sure you want to log out?',
    cancel: true,
    persistent: true,
    ok: {
      color: 'negative',
    },
  }).onOk(() => $router.push('/login'));
};
</script>
