<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useEurojackpotStore } from '@/stores/eurojackpot';
import DrawResults from '@/components/DrawResults.vue';
import DrawOdds from '@/components/DrawOdds.vue';
import { Notify } from 'quasar';

const eurojackpotStore = useEurojackpotStore();

const isLoadingDraws = ref(false);
const activeDate = ref('');

onMounted(async () => {
  isLoadingDraws.value = true;
  try {
    await eurojackpotStore.fetchDraws();
    activeDate.value = eurojackpotStore.drawDates[0];
  } catch (error) {
    Notify.create({
      message: 'Fehler beim Laden der aktuellen Ergebnisse',
      type: 'negative',
    });
  } finally {
    isLoadingDraws.value = false;
  }
});

const activeDraw = computed(() => {
  return eurojackpotStore.getDraw(activeDate.value);
});
</script>

<template>
  <div class="row justify-center">
    <div class="column">
      <h3 class="q-px-md">Eurojackpot Gewinnzahlen</h3>
      <q-spinner v-if="isLoadingDraws" />
      <div v-else>
        <p class="q-px-md">
          Übersicht der Ergebnisse der letzten Ziehungen. Sie können aus den letzten Ziehungen auswählen:
        </p>
        <div class="row">
          <q-select
            v-model="activeDate"
            :options="eurojackpotStore.drawDates"
            label="Datum der Ziehung"
            class="col-12 col-sm-4 q-px-md"
            filled
          />
        </div>

        <div class="row justify-center q-mt-md">
          <DrawResults
            v-if="activeDraw"
            :numbers="activeDraw.numbers"
            :additional-numbers="activeDraw.additionalNumbers"
          />
        </div>

        <div class="row justify-center q-mt-md">
          <DrawOdds
            v-if="activeDraw?.odds"
            :odds="activeDraw.odds"
          />
        </div>
      </div>
    </div>
  </div>
</template>
