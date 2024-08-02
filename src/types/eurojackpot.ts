export interface Eurojackpot {
  date: string;
  jackpot: string;
  numbers: string[];
  additionalNumber: string[];
  odds: Odd[];
}

interface Odd {
  numberOfWinners: string;
  winningClass: number;
}

export interface EurojackpotState {
  draws: Eurojackpot[];
}

export interface DrawsResponse {
  data: {
    draw: {
      draws: Eurojackpot[];
    };
  };
}
