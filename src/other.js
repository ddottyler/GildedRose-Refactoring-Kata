const MIN_SELL_IN = 0;
const MIN_QUALITY = 0;
const MAX_QUALITY_DECREASE = 2;
const MIN_QUALITY_DECREASE = 1;

class OtherItems {
  constructor(item) {
    this.updateOther = this.updateOtherQuality(item);
  }

  updateOtherQuality(item) {
    if (item.quality == MIN_QUALITY) {
    } else if (item.sellIn < MIN_SELL_IN) {
      this.reduceQuality(item, MAX_QUALITY_DECREASE);
    } else {
      this.reduceQuality(item, MIN_QUALITY_DECREASE);
    }
    return item;
  }

  reduceQuality(item, num) {
    item.quality -= num;
  }
}

module.exports = {
  OtherItems,
};
