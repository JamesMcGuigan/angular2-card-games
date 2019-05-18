export default class Player {
  chips: number;
  stats: {
    purchased: number,
    winnings:  number,
    losses:    number
  };

  constructor() {
    this.chips = 0;
    this.stats = {
      purchased: 0,
      winnings:  0,
      losses:    0,
    };
  }
}

