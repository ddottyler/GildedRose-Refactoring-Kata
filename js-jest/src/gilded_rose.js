// do not alter the item class 
class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  updateShop() {
    for(let i = 0; i < this.items.length; i++){

      this.updateSellIn(this.items[i]);

    if(this.items[i].name == "Aged Brie") {
      this.updateBrieQuality(this.items[i])
    } else if(this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"){
      this.updateBackstageQuality(this.items[i])
    } else {
      this.updateQuality(this.items[i])
      }
    };

    return this.items
  }

  updateSellIn(item){
    item.sellIn = item.sellIn - 1
  }

  updateQuality(item) {
    if(item.quality == 0) {
    } else if (item.sellIn < 0) {
      item.quality = item.quality - 2
    } else {
      item.quality = item.quality - 1
    } 
    return item
  }

  updateBrieQuality(item){
    if(item.quality == 50){
    } else {
      item.quality = item.quality + 1
    }
  }

  updateBackstageQuality(item){
    if (item.sellIn <= 5) {
      item.quality = item.quality + 3
    } else if (item.sellIn <= 10) {
      item.quality = item.quality + 2
    } else {
      item.quality = item.quality + 1
    }
  }

}

module.exports = {
  Item,
  Shop
};