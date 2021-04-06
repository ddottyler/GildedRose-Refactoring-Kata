const MIN_QUALITY = 0;
const MAX_QUALITY = 50;
const MAX_QUALITY_INCREASE = 3;
const MID_QUALITY_INCREASE = 2;
const NORM_QUALITY_INCREASE = 1;
const MIN_SELL_IN = 0;
const LOW_SELL_IN = 5;
const MID_SELL_IN = 10;

class Backstage {
  constructor(item) {
    this.updateBackstage = this.updateBackstageQuality(item);
  }

  updateBackstageQuality(item) {
    if (item.sellIn < MIN_SELL_IN) {
      item.quality = MIN_QUALITY;
    } else if (item.sellIn <= LOW_SELL_IN) {
      this.increaseQuality(item, MAX_QUALITY_INCREASE);
    } else if (item.sellIn <= MID_SELL_IN) {
      this.increaseQuality(item, MID_QUALITY_INCREASE);
    } else {
      this.increaseQuality(item, NORM_QUALITY_INCREASE);
    }
    this.qualityCheck(item);
  }

  qualityCheck(item) {
    item.quality >= MAX_QUALITY ? (item.quality = MAX_QUALITY) : item.quality;
  }

  increaseQuality(item, num) {
    item.quality += num;
  }
}

module.exports = {
  Backstage,
};
