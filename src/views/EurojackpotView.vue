<script setup lang="ts">
import { useEurojackpotStore } from '@/stores/eurojackpot';
import { onMounted, ref } from 'vue';

const eurojackpotStore = useEurojackpotStore();

const activeDate = ref('');

onMounted(async () => {
  await eurojackpotStore.getDraws();
  activeDate.value = eurojackpotStore.draws[0].date;
});
</script>

<template>
  <div class="col-10 justify-center">
    <h3>Eurojackpot Gewinnzahlen</h3>
    <q-tabs v-model="activeDate">
      <q-tab
        v-for="draw in eurojackpotStore.draws"
        :key="draw.date"
        :name="draw.date"
        :label="draw.date"
      >
      </q-tab>
    </q-tabs>
    <q-tab-panels
      v-model="activeDate"
      animated
      swipeable
    >
      <q-tab-panel
        v-for="draw in eurojackpotStore.draws"
        :key="draw.date"
        :name="draw.date"
      >
        <h5>EuroJackpot Zahlen vom {{ draw.date }}</h5>
        <p>{{ draw.numbers }} + {{ draw.additionalNumbers }}</p>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
