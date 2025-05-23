"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhysicalProduct_1 = require("./models/PhysicalProduct");
const DigitalProduct_1 = require("./models/DigitalProduct");
const taxCalculator_1 = require("./utils/taxCalculator");
const sortProducts_1 = require("./utils/sortProducts");
const inventory = [
    new PhysicalProduct_1.PhysicalProduct('P001', 'Laptop', 1500, 2.5),
    new DigitalProduct_1.DigitalProduct('D001', 'E-Book', 30, 15),
    new PhysicalProduct_1.PhysicalProduct('P002', 'T-Shirt', 25, 0.3),
    new DigitalProduct_1.DigitalProduct('D002', 'Software License', 200, 0.1),
];
// Apply bulk discounts
for (const prod of inventory) {
    if (prod instanceof PhysicalProduct_1.PhysicalProduct) {
        prod.applyBulkDiscount(2.0, 5);
    }
}
// Display with tax
function displayProductWithTax(product) {
    const tax = (0, taxCalculator_1.calculateTax)(product);
    console.log(`${product.displayDetails()} | Tax: $${tax.toFixed(2)}`);
}
console.log('\n--- Sorted by Name ---');
for (const product of (0, sortProducts_1.sortByName)(inventory)) {
    displayProductWithTax(product);
}
console.log('\n--- Sorted by Price ---');
for (const product of (0, sortProducts_1.sortByPrice)(inventory)) {
    displayProductWithTax(product);
}
