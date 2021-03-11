const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  // describe('item', function(){
  //   it('should never have more than 50 for quality', function(){
  //     expect(new Item("sock", 5, 51)).toEqual("Item quality is too high. Try again.")
  //   })
  // })
    
  describe('applies to all', function(){

    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateShop();

    it("should create an item called foo", function() {
      expect(items[0].name).toBe("foo");
    });

    it('should reduce sellIn by 1 for all but legendary items', function(){
      expect(items[0].sellIn).toBe(-1);
    })

    it('should not let an items quality drop below 0', function(){
      expect(items[0].quality).toBe(0);
    })

  })
  
  describe('normal items', function(){

    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
    const items = gildedRose.updateShop();

    it('should reduce the quality by 1', function(){
      expect(items[0].quality).toBe(19);
    })

    it('should degrade in quality twice as fast when sellIn < 0', function(){
      const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 2)]);
      const items = gildedRose.updateShop();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(0);
    })
    
  })
  
  describe('aged brie', function(){

    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)])
    const items = gildedRose.updateShop();

    it('should increase aged brie quality with age', function(){
      expect(items[0].quality).toBe(1);
    })

    it('should have a max quality of 50, unless legendary', function(){
      const gildedRose = new Shop([new Item('Aged Brie', 2, 50)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(50);
    })
    
  })
  
  describe('backstage passes', function(){

    it('should increase quality by 1 when 10 days or more left for sellIn', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(21);
    })

    it('should increase quality by 2 when 10 days or less left for sellIn', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(22);
    })

    it('should increase quality by 3 when 5 days or less left for sellIn', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(23);
    })

    it('should have a quality of 0 when sellIn < 0', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(0);
    })

    it('should have a max quality of 50, unless legendary', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 2, 48)])
      const items = gildedRose.updateShop();
      expect(items[0].quality).toBe(50);
    })

  })
  
  describe('legendary items', function(){
    
    const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)])
    const items = gildedRose.updateShop();

    it('should not reduce the sellIn', function(){
      expect(items[0].sellIn).toBe(0);
    })
    
    it('should not reduce the quality', function(){
      expect(items[0].quality).toBe(80);
    })
  })
  
});
