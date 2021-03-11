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
      this.items[i].sellIn = this.items[i].sellIn - 1
      this.updateQuality(this.items[i])
    }
    return this.items
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

}

module.exports = {
  Item,
  Shop
};