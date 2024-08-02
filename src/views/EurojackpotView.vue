<script setup lang="ts">
import { useEurojackpotStore } from '@/stores/eurojackpot';
import { onMounted } from 'vue';

const eurojackpotStore = useEurojackpotStore();

onMounted(async () => {
  await eurojackpotStore.getDraws();
});
</script>

<template>
  <div>
    <h1>Eurojackpot</h1>
  </div>
</template>
