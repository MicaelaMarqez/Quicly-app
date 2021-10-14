import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Menu from '../screens/Menu'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import React from 'react'
import Profile from '../screens/Profile'
import Product from '../screens/Product'
import PaymentScreen from '../screens/Card'
import Hero from '../screens/Hero'

const Stack = createNativeStackNavigator()

// const Navigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='homeStack' component={Home} />
//       <Stack.Screen name='MenuStack' component={Menu} />
//       <Stack.Screen name='ProfileStack' component={Profile} />
//       <Stack.Screen name='SignUpStack' component={SignUp} />
//       <Stack.Screen name='LogInStack' component={LogIn} />
//       <Stack.Screen name='Producto' component={Product} />
//     </Stack.Navigator>
//   )
// }

// export const HeroStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='hero' component={Hero} />
//     </Stack.Navigator>
//   )
// }


export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Home} />
    </Stack.Navigator>
  )
}

export const MenuStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='menu' component={Menu} />
      <Stack.Screen name='product' component={Product} />

    </Stack.Navigator>
  )
}

export const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LogIn} />
    </Stack.Navigator>
  )
}

export const SignUpStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='signup' component={SignUp} />
    </Stack.Navigator>
  )
}

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='profile' component={Profile} />
    </Stack.Navigator>
  )
}

// export const ProductStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='producto' component={Product} />
//     </Stack.Navigator>
//   )
// }

