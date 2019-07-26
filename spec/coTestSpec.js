const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe('Car general coverage', () => { 

  it('invalid coverage name', () => {
    const nameCoverage = 'Other Coverage';
    const sellInCoverage = 5;
    const priceCoverage = 5;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(5);
    expect(products[0].sellIn).to.equal(5);
  });
  
  it('valid coverage response', () => {
    const nameCoverage = 'Low Coverage';
    const sellInCoverage = 0;
    const priceCoverage = 0;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products).to.be.a('array');
  });

});

describe('Car Normal Coverage', () => {

  it('price when sellIn is positive', () => {
    const nameCoverage = 'Low Coverage';
    const sellInCoverage = 4;
    const priceCoverage = 5;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(4);
    expect(products[0].sellIn).to.equal(3);
  });

  it('price when sellIn is negative', () => {
    const nameCoverage = 'Low Coverage';
    const sellInCoverage = -1;
    const priceCoverage = 4;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(2);
    expect(products[0].sellIn).to.equal(-2);
  });

  it('negative price', () => {
    const nameCoverage = 'Low Coverage';
    const sellInCoverage = -1;
    const priceCoverage = -2;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(0);
    expect(products[0].sellIn).to.equal(-2);
  });

});

describe('Car Full Coverage', () => { 
  
  it('price when sellIn is positive', () => {
    const nameCoverage = 'Full Coverage';
    const sellInCoverage = 4;
    const priceCoverage = 5;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(6);
    expect(products[0].sellIn).to.equal(3);
  });

  it('price when sellIn is negative', () => {
    const nameCoverage = 'Full Coverage';
    const sellInCoverage = -1;
    const priceCoverage = 4;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(6);
    expect(products[0].sellIn).to.equal(-2);
  });

  it('negative price', () => {
    const nameCoverage = 'Full Coverage';
    const sellInCoverage = 1;
    const priceCoverage = -2;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(1);
    expect(products[0].sellIn).to.equal(0);
  });

  it('price over 50', () => {
    const nameCoverage = 'Full Coverage';
    const sellInCoverage = 1;
    const priceCoverage = 51;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(50);
    expect(products[0].sellIn).to.equal(0);
  });

});

describe('Car Mega Coverage', () => { 
  
  it('price when sellIn is positive', () => {
    const nameCoverage = 'Mega Coverage';
    const sellInCoverage = 4;
    const priceCoverage = 5;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(5);
    expect(products[0].sellIn).to.equal(4);
  });

  it('price when sellIn is negative', () => {
    const nameCoverage = 'Mega Coverage';
    const sellInCoverage = -1;
    const priceCoverage = 4;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(4);
    expect(products[0].sellIn).to.equal(-1);
  });

  it('negative price', () => {
    const nameCoverage = 'Mega Coverage';
    const sellInCoverage = 1;
    const priceCoverage = -2;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(0);
    expect(products[0].sellIn).to.equal(1);
  });

  it('price over 50', () => {
    const nameCoverage = 'Mega Coverage';
    const sellInCoverage = 1;
    const priceCoverage = 51;
    const coTest = new CarInsurance([ new Product(nameCoverage, sellInCoverage, priceCoverage) ]);
    const products = coTest.updatePrice();
    expect(products[0].price).to.equal(50);
    expect(products[0].sellIn).to.equal(1);
  });

});