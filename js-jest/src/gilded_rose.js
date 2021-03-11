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
    }
    return this.items
  }

}

module.exports = {
  Item,
  Shop
};