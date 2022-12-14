import { useState, useEffect, createContext } from 'react'
// model
import { Pizza } from '../models/pizza'
// datas
import PizzaServices from '../services/getPizza'
const pizzaServices = new PizzaServices()

// init context

export interface pizzas {
  map(element: (pizza: Pizza, index: number) => JSX.Element): Boolean
}

export const PizzaContext = createContext<Pizza[] | null>(null)
export const PizzaProvider = ({ children }) => {
  // ********** useState **********

  const [pizzas, setPizzas] = useState<Pizza[]>([])

  // ********** useEffect **********
  // get all pizzas
  useEffect(() => {
    const getPizzas = async () => {
      const res = await pizzaServices.getPizza()
      setPizzas(res)
    }
    getPizzas()
  }, [])
  return (
    <PizzaContext.Provider value={pizzas}>{children}</PizzaContext.Provider>
  )
}
