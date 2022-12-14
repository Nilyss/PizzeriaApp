// models
import { Pizza } from "../models/pizza";

// datas
import menuData from "../data/pizzas.json";

export default class PizzaServices {
  async getPizza() {
    const req = await menuData;
    const res = req.map((data) => {
      return new Pizza(
        data._id,
        data.name,
        data.ingredients,
        data.price,
        data.picture
      );
    });
    return res;
  }
}
