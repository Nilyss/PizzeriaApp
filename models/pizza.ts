export class Pizza {
  _id: string
  name: string
  ingredients: string
  price: string
  picture: string
  totalCartQuantity: number
  constructor(
    _id: string,
    name: string,
    ingredients: string,
    price: string,
    picture: string,
    totalCartQuantity: number
  ) {
    this._id = _id
    this.name = name
    this.ingredients = ingredients
    this.price = price
    this.picture = picture
    this.totalCartQuantity = totalCartQuantity
  }
}
