"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPrice = sortByPrice;
exports.sortByName = sortByName;
function sortByPrice(products) {
    return [...products].sort((a, b) => a.price - b.price);
}
function sortByName(products) {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
}
