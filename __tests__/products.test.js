'use strict';

const Products = require('../src/models/products.js');
const products = new Products();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Products', () => {
    it('can post() a new player', () => {
        let obj = {record: 'IPhone'};
        return products.post(obj)
            .then(record => {
                Object.keys(obj).forEach(key =>{
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });

    it('can get() a product', () => {
        let obj = {record: 'Android'};
        return products.post(obj)
            .then(record => {
                return products.get(record._id)
                    .then(products => {
                        Object.keys(obj).forEach(key =>{
                            expect(products[0][key]).toEqual(obj[key]);
                        });
                    });
            });
    });

});