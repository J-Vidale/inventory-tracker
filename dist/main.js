"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const sortProducts_1 = require("./utils/sortProducts");
const inventory = [
    new PhysicalProduct_1.PhysicalProduct('P001', 'Laptop', 1500, 2.5),
    new DigitalProduct_1.DigitalProduct('D001', 'E-Book', 30, 15),
    new PhysicalProduct_1.PhysicalProduct('P002', 'T-Shirt', 25, 0.3),
    new DigitalProduct_1.DigitalProduct('D002', 'Software License', 200, 0.1),
];
// Apply bulk discounts
for (const product of inventory) {
    if (product instanceof PhysicalProduct_1.PhysicalProduct) {
        product.applyBulkDiscount(2.0, 5);
    }
}
// Sort by name
console.log('\n--- Sorted by Name ---');
const nameSorted = (0, sortProducts_1.sortByName)(inventory);
for (const product of nameSorted) {
    console.log(product.displayDetails());
}
// Sort by price
console.log('\n--- Sorted by Price ---');
const priceSorted = (0, sortProducts_1.sortByPrice)(inventory);
for (const product of priceSorted) {
    console.log(`${product.name}: $${product.price.toFixed(2)}`);
}
