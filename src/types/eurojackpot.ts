export interface Eurojackpot {
  date: string;
  jackpot: string;
  numbers: string[];
  additionalNumbers: string[];
  odds: Odd[];
}

export interface Odd {
  numberOfWinners: string;
  winningClass: number;
  odd: string;
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
