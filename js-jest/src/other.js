class OtherItems {

  constructor(item) {
    this.updateOther = this.updateOtherQuality(item)
  }

updateOtherQuality(item) {
  if (item.quality == 0) {
  } else if (item.sellIn < 0) {
    this.reduceQuality(item, 2);
  } else {
    this.reduceQuality(item, 1);
  }
  return item;
}

reduceQuality(item, num) {
  item.quality -= num;
}

}

module.exports = {
  OtherItems,
};
