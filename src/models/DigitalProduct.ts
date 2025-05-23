import { Product } from './Product';

export class DigitalProduct extends Product {
  constructor(
    sku: string,
    name: string,
    price: number,
    public fileSize: number // in megabytes
  ) {
    super(sku, name, price);
  }

  getPriceWithTax(): number {
    return this.price; // No tax for digital products
  }

  get formattedFileSize(): string {
    return `${this.fileSize.toFixed(2)} MB`;
  }

  override displayDetails(): string {
    return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
  }
}
