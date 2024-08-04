<script setup lang="ts">
import type { Odd } from '@/types/eurojackpot';
import { ref } from 'vue';

interface Props {
  odds: Odd[];
}

const props = defineProps<Props>();

const columns = [
  { name: 'winningClass', required: true, label: 'Gewinnklasse', field: 'winningClass' },
  { name: 'numberOfWinners', required: true, label: 'Anzahl Gewinner', field: 'numberOfWinners' },
  { name: 'oddsInCent', required: true, label: 'Gewinnsumme', field: 'odd' },
];

const pagination = ref({
  rowsPerPage: 0,
});
</script>

<template>
  <q-table
    :rows="props.odds"
    :columns="columns"
    v-model:pagination="pagination"
    row-key="name"
    flat
    hide-pagination
  />
</template>
