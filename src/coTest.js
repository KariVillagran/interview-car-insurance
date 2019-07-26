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

  updateNormalCovarage(product) {
    let decreases = 1;
    if (product.sellIn < 0) {
      decreases = 2;
    }
    if(product.price >= 0) {
      product.price = product.price - decreases;
    } else {
      product.price = 0;
    }
    product.sellIn = product.sellIn - 1;
    return product;
  }

  updatePrice() {
    this.products = this.products.map(product => this.updateNormalCovarage(product));
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
