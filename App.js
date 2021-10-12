<<<<<<< HEAD
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import buyConfirmation from './components/buyConfirmation'
=======
import React, { useEffect } from 'react'
import Navigator from './navigation/MainNavBottom'
import { NavigationContainer } from '@react-navigation/native'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import { initStripe } from '@stripe/stripe-react-native'

import { LogBox } from 'react-native'
LogBox.ignoreAllLogs(true)

const globalStore = createStore(rootReducer, applyMiddleware(thunk))
>>>>>>> 33b7e5981c2e661adc13275f19f41f9f6195ab97

export default function App() {
  useEffect(() => {
    initStripe({
      publishableKey: 'pk_test_51JiHmiD8MtlvyDMXOy1Xz9IRz7S6hXvSX3YorvlFJSNbByoEHqgmIhvVuOuYgA3PiOR9hxBM0QzQcf6OlJs4VYgI00pB5OSjXZ',
    })
  }, [])

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <buyConfirmation />
     
      <StatusBar style="auto" />
    </View>
  );
=======
    <NavigationContainer>
      <Provider store={globalStore}>
        <Navigator />
      </Provider>
    </NavigationContainer>
  )
>>>>>>> 33b7e5981c2e661adc13275f19f41f9f6195ab97
}
