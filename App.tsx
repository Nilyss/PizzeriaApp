import { NavigationContainer } from '@react-navigation/native'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import { PizzaProvider } from './context'

// Routes
import { Routes } from './Routes/routes'

export default function App() {
  return (
    <PizzaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </PizzaProvider>
  )
}
