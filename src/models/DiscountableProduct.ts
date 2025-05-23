export interface DiscountableProduct {
  applyDiscount(discountPercentage: number): void;
  applyBulkDiscount?(threshold: number, discountPercentage: number): void;
}