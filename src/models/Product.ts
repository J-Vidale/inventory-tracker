// src/models/Product.ts

export abstract class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) {}

  /**
   * Returns the basic details of the product.
   * Subclasses can override and call super.displayDetails().
   */
  public displayDetails(): string {
    return `${this.name} (ID: ${this.id}) - $${this.price.toFixed(2)}`;
  }
}
