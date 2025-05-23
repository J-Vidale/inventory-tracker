import { Product } from './Product';
export class DigitalProduct extends Product {
    constructor(sku, name, price, fileSize // in megabytes
    ) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price; // No tax for digital products
    }
    get formattedFileSize() {
        return `${this.fileSize.toFixed(2)} MB`;
    }
    displayDetails() {
        return `${super.displayDetails()} | File Size: ${this.formattedFileSize}`;
    }
}
