<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue';
</script>

<template>
  <div>
    <q-layout view="lhr lpR lfr">
      <q-header class="header">
        <NavBar />
      </q-header>
      <q-page-container class="row justify-center">
        <router-view />
      </q-page-container>
      <q-footer class="footer q-pa-sm">Images and texts were created with AI</q-footer>
    </q-layout>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #333a65;
}
</style>
