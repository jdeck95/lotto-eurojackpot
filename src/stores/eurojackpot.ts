import LottoheldenApi from '@/api/LottoheldenApi';
import { convertCentToEuro } from '@/helpers/monetaryUnitConverter';
import type { EurojackpotState } from '@/types/eurojackpot';
import { defineStore } from 'pinia';

export const useEurojackpotStore = defineStore('eurojackpot', {
  state: (): EurojackpotState => ({ draws: [] }),
  actions: {
    async fetchDraws() {
      const result = await LottoheldenApi.getDraws();
      this.draws = result.data.draw.draws;
      this.draws.forEach((draw) => {
        draw.odds = draw.odds.map((odd) => {
          return {
            winningClass: odd.winningClass,
            numberOfWinners: odd.numberOfWinners,
            odd: convertCentToEuro(parseInt(odd.odd)),
          };
        });
      });
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
