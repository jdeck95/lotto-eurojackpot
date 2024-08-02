import LottoheldenApi from '@/api/LottoheldenApi';
import type { EurojackpotState } from '@/types/eurojackpot';
import { defineStore } from 'pinia';

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: (): EurojackpotState => ({ draws: [] }),
  actions: {
    async getDraws() {
      const result = await LottoheldenApi.getDraws();
      this.draws = result.data.draw.draws;
    },
  },
});
