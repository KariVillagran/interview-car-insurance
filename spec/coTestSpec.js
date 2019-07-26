const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe('Car Normal Covarage', () => {

  it('valid covarage', () => {
    const nameCovarage = 'Low Coverage';
    const sellInCovarage = 0;
    const priceCovarage = 0;
    const coTest = new CarInsurance([ new Product(nameCovarage, sellInCovarage, priceCovarage) ]);
    const products = coTest.updatePrice();
    expect(products).to.be.a('array');
  });

  it('price when sellIn is positive', () => {
    const nameCovarage = 'Low Coverage';
    const sellInCovarage = 4;
    const priceCovarage = 5;
    const coTest = new CarInsurance([ new Product(nameCovarage, sellInCovarage, priceCovarage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(4);
    expect(products[0].sellIn).to.equal(3);
  });

  it('price when sellIn is negative', () => {
    const nameCovarage = 'Low Coverage';
    const sellInCovarage = -1;
    const priceCovarage = 4;
    const coTest = new CarInsurance([ new Product(nameCovarage, sellInCovarage, priceCovarage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(2);
    expect(products[0].sellIn).to.equal(-2);
  });

});
