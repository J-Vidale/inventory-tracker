import { Product } from './Product';
import { DiscountableProduct } from './DiscountableProduct';

export class PhysicalProduct extends Product implements DiscountableProduct {
  constructor(
    sku: string,
    name: string,
    price: number,
    public weight: number // in kilograms
  ) {
    super(sku, name, price);
  }

  getPriceWithTax(): number {
    return this.price * 1.1; // 10% tax
  }

  get formattedWeight(): string {
    return `${this.weight.toFixed(2)} kg`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} | Weight: ${this.formattedWeight}`;
  }

  applyDiscount(discountPercentage: number): void {
    this.price -= this.price * (discountPercentage / 100);
  }

  applyBulkDiscount(threshold: number, discountPercentage: number): void {
    if (this.weight > threshold) {
      this.applyDiscount(discountPercentage);
    }
  }
}
