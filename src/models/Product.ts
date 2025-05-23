export abstract class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number
  ) {}

  abstract getPriceWithTax(): number;

  displayDetails(): string {
    return `${this.name} (SKU: ${this.sku}) - $${this.price.toFixed(2)}`;
  }
}
