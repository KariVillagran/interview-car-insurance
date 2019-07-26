class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products = this.products.map(product => product);
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
