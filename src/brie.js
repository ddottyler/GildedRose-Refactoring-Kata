const MAX_QUALITY = 50;
const NORM_QUALITY_INCREASE = 1;

class Brie {
  constructor(item) {
    this.updateBrie = this.updateBrieQuality(item);
  }

  updateBrieQuality(item) {
    if (item.quality == MAX_QUALITY) {
    } else {
      this.increaseQuality(item, NORM_QUALITY_INCREASE);
    }
  }

  increaseQuality(item, num) {
    item.quality += num;
  }
}

module.exports = {
  Brie,
};
