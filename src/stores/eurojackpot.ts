import LottoheldenApi from '@/api/LottoheldenApi';
import { defineStore } from 'pinia';

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: () => ({ draws: [] }),
  actions: {
    async getDraws() {
      const result = await LottoheldenApi.getDraws();
      console.log(result);
    },
  },
});
