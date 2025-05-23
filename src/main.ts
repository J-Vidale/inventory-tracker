import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { sortByName, sortByPrice } from './utils/sortProducts';

const inventory = [
  new PhysicalProduct('P001', 'Laptop', 1500, 2.5),
  new DigitalProduct('D001', 'E-Book', 30, 15),
  new PhysicalProduct('P002', 'T-Shirt', 25, 0.3),
  new DigitalProduct('D002', 'Software License', 200, 0.1),
];

// Apply bulk discounts
for (const product of inventory) {
  if (product instanceof PhysicalProduct) {
    product.applyBulkDiscount(2.0, 5);
  }
}

// Sort by name
console.log('\n--- Sorted by Name ---');
const nameSorted = sortByName(inventory);
for (const product of nameSorted) {
  console.log(product.displayDetails());
}

// Sort by price
console.log('\n--- Sorted by Price ---');
const priceSorted = sortByPrice(inventory);
for (const product of priceSorted) {
  console.log(`${product.name}: $${product.price.toFixed(2)}`);
}
