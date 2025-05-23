import { Product } from '../models/Product';
/**
 * Calculates tax for a given product.
 * You can adjust the rate or use other product properties here.
 */
export function calculateTax(item: Product): number {
  const TAX_RATE = 0.08; // 8% sales tax
  return item.price * TAX_RATE;
}
