const { Brie } = require("./brie");
const { Backstage } = require("./backstage");
const { Conjured } = require("./conjured");
const { OtherItems } = require("./Other");

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateShop() {
    this.updateSellIn();
    this.updateQualityByName();
    return this.items;
  }

  updateSellIn() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
      } else {
        this.items[i].sellIn -= 1;
      }
    }
  }

  updateQualityByName() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
        new Backstage(this.items[i]);
      } else if (this.items[i].name == "Aged Brie") {
        new Brie(this.items[i]);
      } else if (this.items[i].name == "Conjured Mana Cake") {
        new Conjured(this.items[i]);
      } else if (this.items[i].name == "Sulfuras, Hand of Ragnaros") {
      } else {
        new OtherItems(this.items[i]);
      }
    }
  }
}

module.exports = {
  Item,
  Shop,
};
