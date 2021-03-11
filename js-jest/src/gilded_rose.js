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
  // this method shouldn't be called update quality as it updates both quality and sellIn.
  updateQuality() {
    // for loop to iterate through each item within the shop
    for (let i = 0; i < this.items.length; i++) {
      // checking whether the item is NOT aged brie AND NOT backstage passes 
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        // if item is NOT aged brie AND NOT backstage passes, it checks if items quality is greater than 0
        if (this.items[i].quality > 0) {
          // if item is not aged brief and not backstage passes and if items quality is greater than 0, and if item is not legendary item, it reduces quality by 1 
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        // else, if item is brie or backstage passes. if the items quality is less than 50 it adds 1 to quality. 
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          // if item is backstage pass, if it's sell in is less than 11 and quality is less than 50, quality + 1  
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            // if item is backstage pass, if it's sell in is less than 6 and quality is less than 50, quality + 1 
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      // same overheda if statement but no focused on the sell-in. 
      // if item is not legendary sulfuras, -1 off sellin value. 
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      // if sellin is less than 0, if item is not brie and not backstage pass, if item quality is more than 0 and item is not legendary sulfuras, then quality - 1
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
            // if item is backstage pass and sellin is less than 0, item quality is effectively 0 
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          // if item is aged brie and quality is less than 50, quality + 1 
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};