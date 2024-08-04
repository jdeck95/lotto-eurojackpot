import LottoheldenApi from '@/api/LottoheldenApi';
import type { EurojackpotState } from '@/types/eurojackpot';
import { defineStore } from 'pinia';

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: (): EurojackpotState => ({ draws: [] }),
  actions: {
    async fetchDraws() {
      const result = await LottoheldenApi.getDraws();
      this.draws = result.data.draw.draws;
    },

    getDraw(date: string) {
      return this.draws.find((draw) => draw.date === date);
    },
  },
  getters: {
    drawDates(state) {
      return state.draws.map((draw) => draw.date);
    },
  },
});
