export const drawsQuery = `
  query draw {
    draw(type: "eurojackpot") {
      draws {
        date
        jackpot
      }
      success
    }
  }
`;
