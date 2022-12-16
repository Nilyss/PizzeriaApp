export class Pizza {
  _id: string
  name: string
  ingredients: string
  price: string
  picture: string
  quantity: number
  constructor(
    _id: string,
    name: string,
    ingredients: string,
    price: string,
    picture: string,
    quantity: number
  ) {
    this._id = _id
    this.name = name
    this.ingredients = ingredients
    this.price = price
    this.picture = picture
    this.quantity = quantity
  }
}
