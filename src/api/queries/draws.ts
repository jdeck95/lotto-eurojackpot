export const drawsQuery = `
  query draw {
    draw(type: "eurojackpot") {
      draws {
        date
        jackpot
        numbers
        additionalNumbers
        odds {
          numberOfWinners
          winningClass
        }
      }
      success
    }
  }
`;
