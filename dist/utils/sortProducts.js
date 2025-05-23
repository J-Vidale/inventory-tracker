"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByName = sortByName;
exports.sortByPrice = sortByPrice;
/**
 * Sorts an array of Products by their name (alphabetical order).
 * Returns a new sorted array without mutating the original.
 */
function sortByName(items) {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}
/**
 * Sorts an array of Products by their price (ascending order).
 * Returns a new sorted array without mutating the original.
 */
function sortByPrice(items) {
    return items.slice().sort((a, b) => a.price - b.price);
}
