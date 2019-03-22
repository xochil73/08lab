'use strict';

const Categories = require('../src/models/categories.js');
const category = new Categories();

const supergoose = require('./supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Categories', () => {
    it('can post() a new category', () => {
        let obj = {record: 'Phones'};
        return category.post(obj)
            .then(record => {
                Object.keys(obj).forEach(key =>{
                    expect(record[key]).toEqual(obj[key]);
                });
            });
    });

    it('can get() a category', () => {
        let obj = {record: 'Phones'};
        return category.post(obj)
            .then(record => {
                return category.get(record._id)
                    .then(category => {
                        console.log('category', category);
                        Object.keys(obj).forEach(key =>{
                            expect(category[1][key]).toEqual(obj[key]);
                        });
                    });
            });
    });
    // it('can put() a category', () => {
    //     let obj = {record:'Phones'};
    //     let key = {id:'952f72db-0011-4b92-b204-56a504430e82'}
    //     return category.put(key, obj)
    //         .then(record => {
    //             console.log(record);
    //             Object.keys(obj),forEach(key => {
    //                 expect(category[1][key]).toEqual(obj[key]);
    //             })
    //         })
    // })

});