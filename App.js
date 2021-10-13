import React, { useEffect } from 'react'
import Navigator from './navigation/MainNavBottom'
import { NavigationContainer } from '@react-navigation/native'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { initStripe } from '@stripe/stripe-react-native'

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs(true)

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#fe6849',
    accent: 'black',
  },
};

const globalStore = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
  useEffect(() => {
    initStripe({
      publishableKey: 'pk_test_51JiHmiD8MtlvyDMXOy1Xz9IRz7S6hXvSX3YorvlFJSNbByoEHqgmIhvVuOuYgA3PiOR9hxBM0QzQcf6OlJs4VYgI00pB5OSjXZ',
    })
  }, [])

  return (
    <NavigationContainer>
      <Provider store={globalStore}>
        <PaperProvider theme={theme}>
          <Navigator />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  )
}
