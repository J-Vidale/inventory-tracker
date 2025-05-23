import { Product } from '../models/Product';

export function sortByName(products: Product[], ascending: boolean = true): Product[] {
  return products.slice().sort((a, b) => {
    return ascending
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });
}

export function sortByPrice(products: Product[], ascending: boolean = true): Product[] {
  return products.slice().sort((a, b) => {
    return ascending ? a.price - b.price : b.price - a.price;
  });
}
