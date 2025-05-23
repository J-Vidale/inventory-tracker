import { Product } from './Product';
export class PhysicalProduct extends Product {
    constructor(sku, name, price, weight // in kilograms
    ) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return this.price * 1.1; // 10% tax
    }
    get formattedWeight() {
        return `${this.weight.toFixed(2)} kg`;
    }
    displayDetails() {
        return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
    }
    applyDiscount(discountPercentage) {
        this.price -= this.price * (discountPercentage / 100);
    }
    applyBulkDiscount(threshold, discountPercentage) {
        if (this.weight > threshold) {
            this.applyDiscount(discountPercentage);
        }
    }
}
