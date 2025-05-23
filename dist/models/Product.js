// src/models/Product.ts
export class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    /**
     * Returns the basic details of the product.
     * Subclasses can override and call super.displayDetails().
     */
    displayDetails() {
        return `${this.name} (ID: ${this.id}) - $${this.price.toFixed(2)}`;
    }
}
