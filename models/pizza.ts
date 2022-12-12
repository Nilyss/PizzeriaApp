export class Pizza {
  name: string;
  ingredients: string;
  price: string;
  picture: string;
  constructor(
    name: string,
    ingredients: string,
    price: string,
    picture: string
  ) {
    (this.name = name),
      (this.ingredients = ingredients),
      (this.price = price),
      (this.picture = picture);
  }
}
