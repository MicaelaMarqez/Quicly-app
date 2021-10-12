import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import LogIn from '../screens/LogIn'
import React from 'react'
import Profile from '../screens/Profile'
import SignUp from '../screens/SignUp'
import Menu from '../screens/Menu'
import PaymentScreen from '../screens/Card'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='homeStack' component={Home} />
      <Stack.Screen name='MenuStack' component={Menu} />
      <Stack.Screen name='ProfileStack' component={Profile} />
      <Stack.Screen name='SignUpStack' component={SignUp} />
      <Stack.Screen name='LogInStack' component={LogIn} />
    </Stack.Navigator>
  )
}

export default Navigator
