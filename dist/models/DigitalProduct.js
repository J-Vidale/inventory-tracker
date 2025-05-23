"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigitalProduct = void 0;
const Product_1 = require("./Product");
class DigitalProduct extends Product_1.Product {
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
exports.DigitalProduct = DigitalProduct;
