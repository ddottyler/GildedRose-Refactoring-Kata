const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  
  it("should create an item called foo", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  describe('normal items', function(){
    
    it('should update a normal item', function(){
      const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19);
    })

  })

  describe('aged brie', function(){

    it('should update aged brief correctly', function(){
      const gildedRose = new Shop([new Item('Aged Brie', 2, 0)])
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1);
    })

  })

  describe('backstage passes', function(){
    it('should update backstage passes correctly', function(){
      const gildedRose = new Shop([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)])
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(14);
      expect(items[0].quality).toBe(21);
    })
  })
  
  describe('legendary items', function(){
    
      it('should update legendary items correctly', function(){
        const gildedRose = new Shop([new Item('Sulfuras, Hand of Ragnaros', 0, 80)])
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).toBe(0);
        expect(items[0].quality).toBe(80);
      })
    
  })

});
