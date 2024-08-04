<script setup lang="ts">
import NavBar from '@/components/layout/NavBar.vue';
</script>

<template>
  <div>
    <q-layout view="lHr lpR lFr">
      <q-header>
        <NavBar />
      </q-header>
      <q-page-container class="row justify-center">
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>
