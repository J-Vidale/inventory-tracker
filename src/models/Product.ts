export abstract class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) {}

  abstract displayDetails(): string;
}
