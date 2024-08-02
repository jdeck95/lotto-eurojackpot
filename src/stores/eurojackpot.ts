import { defineStore } from 'pinia';

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: () => ({ draws: [] }),
});
