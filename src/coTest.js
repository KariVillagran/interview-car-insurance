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
    if(product.price > 0) {
      product.price = product.price - decreases;
    } else {
      product.price = 0;
    }
    product.sellIn = product.sellIn - 1;
    return product;
  }

  updateFullCovarage(product) {
    let increase = 1;
    if (product.sellIn < 0) {
      increase = 2;
    }
    if (product.price < 0) {
      product.price = 0;
    }
    if(product.price < 50) {
      product.price = product.price + increase;
    } else {
      product.price = 50;
    }
    product.sellIn = product.sellIn - 1;
    return product;
  }

  updateMegaCovarage(product) {
    if (product.price < 0) {
      product.price = 0;
    }
    if(product.price > 50) {
      product.price = 50;
    }
    return product;
  }

  updatePrice() {
    this.products = this.products.map(product => {
      if (['Low Coverage', 'Medium Coverage'].includes(product.name)) {
        return this.updateNormalCovarage(product);
      } else if(['Full Coverage'].includes(product.name)) {
        return this.updateFullCovarage(product);
      } else if (['Mega Coverage'].includes(product.name)) {
        return this.updateMegaCovarage(product);
      } else {
        //console.error('Check invalid product name'); // TODO: implement logger level
      }
      return product;
    });
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
