const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe('Car Covarage', () => {

  it('Check valid covarage', () => {
    const coTest = new CarInsurance([ new Product('foo', 0, 0) ]);
    const products = coTest.updatePrice();
    expect(products).to.be.a('array');
  });

});
