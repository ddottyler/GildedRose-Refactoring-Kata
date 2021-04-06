const MIN_SELL_IN = 0;
const MIN_QUALITY = 0;
const MAX_QUALITY_DECREASE = 4;
const NORM_QUALITY_DECREASE = 2;

class Conjured {
  constructor(item) {
    this.updateConjured = this.updateConjuredQuality(item);
  }

  updateConjuredQuality(item) {
    if (item.sellIn < MIN_SELL_IN) {
      this.reduceQuality(item, MAX_QUALITY_DECREASE);
    } else {
      this.reduceQuality(item, NORM_QUALITY_DECREASE);
    }
    if (item.quality < MIN_QUALITY) {
      item.quality = MIN_QUALITY;
    }
  }

  reduceQuality(item, num) {
    item.quality -= num;
  }
}

module.exports = {
  Conjured,
};
