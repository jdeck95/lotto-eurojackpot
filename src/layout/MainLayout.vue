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
      <q-footer class="row footer q-pa-sm q-pl-lg">
        <a href="https://responsibleaidisclosure.com/">
          <img
            src="@/assets/AI.png"
            alt="RAID"
            height="20px"
            class="q-mr-md"
          />
        </a>
        Images and texts were created with AI
      </q-footer>
    </q-layout>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background-color: #333a65;
}
</style>
