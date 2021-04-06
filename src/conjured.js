class Conjured {
  constructor(item) {
    this.updateConjured = this.updateConjuredQuality(item);
  }

  updateConjuredQuality(item) {
    if (item.sellIn < 0) {
      this.reduceQuality(item, 4);
    } else {
      this.reduceQuality(item, 2);
    }
    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  reduceQuality(item, num) {
    item.quality -= num;
  }
}

module.exports = {
  Conjured,
};
