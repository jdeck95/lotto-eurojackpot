import { createPinia, setActivePinia } from 'pinia';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { useEurojackpotStore } from '../../src/stores/eurojackpot';
import LottoheldenApi from '../../src/api/LottoheldenApi';
import { lottoheldenApiGetDrawsResponse } from '../mocks/LottoheldenApi';

describe('TODO', () => {
  const pinia = createPinia();
  setActivePinia(pinia);
  const store = useEurojackpotStore();

  LottoheldenApi.getDraws = vi.fn().mockResolvedValue(lottoheldenApiGetDrawsResponse);

  afterEach(() => {
    store.$reset();
  });

  it('should fetch draws', async () => {
    await store.fetchDraws();
    expect(store.draws).toStrictEqual([
      {
        date: 'Aug 02 2024',
        jackpot: '17000000',
        numbers: ['14', '20', '26', '30', '31'],
        additionalNumbers: ['1', '2'],
        odds: [
          {
            numberOfWinners: '0',
            winningClass: 1,
            odd: '17.000.000,00€',
          },
        ],
      },
      {
        date: 'Jul 30 2024',
        jackpot: '10000000',
        numbers: ['2', '16', '30', '31', '49'],
        additionalNumbers: ['2', '5'],
        odds: [
          {
            numberOfWinners: '0',
            winningClass: 1,
            odd: '10.000.000,00€',
          },
        ],
      },
    ]);
  });

  it('should get specific draw by date', async () => {
    await store.fetchDraws();
    const draw = store.getDraw('Jul 30 2024');
    expect(draw?.date).toBe('Jul 30 2024');
    expect(draw?.jackpot).toBe('10000000');
  });

  it('should return draw dates', async () => {
    await store.fetchDraws();
    expect(store.drawDates).toStrictEqual(['Aug 02 2024', 'Jul 30 2024']);
  });
});
