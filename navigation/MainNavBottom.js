import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { CartStack, HomeStack } from './MainNavStack'
import { Image, Text, View } from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'

const Bottom = createBottomTabNavigator()

const CartBottom = ({ route, navigation }) => {
  return (
    <Bottom.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: 'LatoRegular',
          fontSize: 24,
        },
        headerStyle: {
          height: 80,
          backgroundColor: 'whitesmoke',
        },
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      })}
    >
      <Bottom.Screen
        name='homeStack'
        component={HomeStack}
        options={{
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{
                  fontFamily: 'LatoRegular',
                  fontSize: 20,
                  textAlign: 'center',
                  marginRight: 15,
                }}
              >
                {route?.params ? 'Hi ' + route?.params?.firstName + '!' : 'Quickly'}
              </Text>
              {route?.params && (
                <Image
                  source={{ uri: route?.params?.src }}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 45,
                    marginRight: 15,
                    borderWidth: 1,
                    borderColor: 'black',
                  }}
                />
              )}
            </View>
          ),
          headerLeft: () => (
            <Ionicons
              onPress={() => navigation.toggleDrawer()}
              name='menu-sharp'
              size={24}
              color='black'
              style={{ marginLeft: 15 }}
            />
          ),
          headerStyle: { height: 60 },
          title: 'Bienvenido',
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          drawerIcon: () => <Ionicons name='home-outline' size={24} color='black' />,
          tabBarIcon: ({ focused, color }) => <AntDesign name='home' size={32} color={color} />,
        }}
      />
      <Bottom.Screen
        name='cartStack'
        component={CartStack}
        options={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <AntDesign name='shoppingcart' size={32} color={color} />
          ),
        }}
      />
    </Bottom.Navigator>
  )
}

export default CartBottom
