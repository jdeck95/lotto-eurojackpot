export interface Eurojackpot {
  date: string;
  jackpot: string;
  numbers: string[];
  additionalNumbers: string[];
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
