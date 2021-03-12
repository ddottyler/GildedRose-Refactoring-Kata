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
        this.updateBackstageQuality(this.items[i]);
      } else if (this.items[i].name == 'Aged Brie') {
        this.updateBrieQuality(this.items[i]);
      } else if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
      } else if (this.items[i].name == 'Conjured Mana Cake') {
        this.updateConjuredQuality(this.items[i]);
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

  updateBrieQuality(item) {
    if (item.quality == 50) {
    } else {
      this.increaseQuality(item, 1);
    }
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
