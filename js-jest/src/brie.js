class Brie {

  constructor(item) {
    this.updateBrie = this.updateBrieQuality(item)
  }

  updateBrieQuality(item) {
    if (item.quality == 50) {
    } else {
      this.increaseQuality(item, 1)
    }
  }

  increaseQuality(item, num) {
    item.quality = item.quality + num;
  }

}

module.exports = {
  Brie,
};