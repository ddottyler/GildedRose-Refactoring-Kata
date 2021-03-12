const {Brie} = require('./brie');
const {Backstage} = require('./backstage');
const {Conjured} = require('./conjured');

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]) {
    this.items = items;
  }

  updateShop() {
    this.updateSellIn();
    this.updateQualityByName();
    return this.items;
  }

  updateSellIn() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
      } else {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }
  }

  updateQualityByName() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        new Backstage(this.items[i]);
      } else if (this.items[i].name == 'Aged Brie') {
        new Brie(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
      } else if (this.items[i].name == 'Conjured Mana Cake') {
        new Conjured(this.items[i]);
      } else {
        this.updateQuality(this.items[i]);
      }
    };
  }

  updateQuality(item) {
    if (item.quality == 0) {
    } else if (item.sellIn < 0) {
      this.reduceQuality(item, 2);
    } else {
      this.reduceQuality(item, 1);
    }
    return item;
  }

  reduceQuality(item, num) {
    item.quality = item.quality - num;
  }

  increaseQuality(item, num) {
    item.quality = item.quality + num;
  }
}

module.exports = {
  Item,
  Shop,
};
