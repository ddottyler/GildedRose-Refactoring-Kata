class Backstage {

  constructor(item) {
    this.updateBackstage = this.updateBackstageQuality(item)
  }

  updateBackstageQuality(item) {
    if (item.sellIn < 0) {
      item.quality = 0;
    } else if (item.sellIn <= 5) {
      this.increaseQuality(item, 3);
    } else if (item.sellIn <= 10) {
      this.increaseQuality(item, 2);
    } else {
      this.increaseQuality(item, 1);
    }
    if (item.quality >= 50) {
      item.quality = 50;
    }
  }

  increaseQuality(item, num) {
    item.quality += num;
  }
  
}

module.exports = {
  Backstage,
};