import { Product } from '../models/Product';

/**
 * Sorts an array of Products by their name (alphabetical order).
 * Returns a new sorted array without mutating the original.
 */
export function sortByName<T extends Product>(items: T[]): T[] {
  return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Sorts an array of Products by their price (ascending order).
 * Returns a new sorted array without mutating the original.
 */
export function sortByPrice<T extends Product>(items: T[]): T[] {
  return items.slice().sort((a, b) => a.price - b.price);
}
