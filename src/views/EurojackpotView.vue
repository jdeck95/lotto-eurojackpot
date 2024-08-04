<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useEurojackpotStore } from '@/stores/eurojackpot';
import DrawResults from '@/components/DrawResults.vue';

const eurojackpotStore = useEurojackpotStore();

const activeDate = ref('');

onMounted(async () => {
  await eurojackpotStore.fetchDraws();
  activeDate.value = eurojackpotStore.drawDates[0];
});

const activeDraw = computed(() => {
  return eurojackpotStore.getDraw(activeDate.value);
});
</script>

<template>
  <div class="col-10 justify-center">
    <h3>Eurojackpot Gewinnzahlen</h3>
    <div class="row">
      <q-select
        v-model="activeDate"
        :options="eurojackpotStore.drawDates"
        label="Standard"
        class="col-12 col-sm-3"
      />
    </div>

    <div class="row q-mt-md">
      <DrawResults
        v-if="activeDraw"
        :numbers="activeDraw.numbers"
        :additional-numbers="activeDraw.additionalNumbers"
      />
    </div>
  </div>
</template>
