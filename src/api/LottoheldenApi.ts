import type { DrawsResponse } from '@/types/eurojackpot';
import { drawsQuery } from './queries/draws';

class LottoheldenApi {
  private baseUrl = import.meta.env.VITE_APP_LOTTOHELDEN_API_URL as string;

  public async getDraws(): Promise<DrawsResponse> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: drawsQuery,
      }),
    });
    return response.json();
  }
}

export default new LottoheldenApi();
