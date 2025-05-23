import { Product } from './models/Product';
import { PhysicalProduct } from './models/PhysicalProduct';
import { DigitalProduct } from './models/DigitalProduct';
import { calculateTax } from './utils/taxCalculator';
import { sortByName, sortByPrice } from './utils/sortProducts';

const inventory: Product[] = [
  new PhysicalProduct('P001', 'Laptop', 1500, 2.5),
  new DigitalProduct('D001', 'E-Book', 30, 15),
  new PhysicalProduct('P002', 'T-Shirt', 25, 0.3),
  new DigitalProduct('D002', 'Software License', 200, 0.1),
];

// Apply bulk discounts
for (const prod of inventory) {
  if (prod instanceof PhysicalProduct) {
    prod.applyBulkDiscount(2.0, 5);
  }
}

// Display with tax
function displayProductWithTax(product: Product) {
  const tax = calculateTax(product);
  console.log(`${product.displayDetails()} | Tax: $${tax.toFixed(2)}`);
}

console.log('\n--- Sorted by Name ---');
for (const product of sortByName(inventory)) {
  displayProductWithTax(product);
}

console.log('\n--- Sorted by Price ---');
for (const product of sortByPrice(inventory)) {
  displayProductWithTax(product);
}