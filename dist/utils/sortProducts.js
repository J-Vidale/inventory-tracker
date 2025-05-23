"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByName = sortByName;
exports.sortByPrice = sortByPrice;
function sortByName(products, ascending = true) {
    return products.slice().sort((a, b) => {
        return ascending
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });
}
function sortByPrice(products, ascending = true) {
    return products.slice().sort((a, b) => {
        return ascending ? a.price - b.price : b.price - a.price;
    });
}
