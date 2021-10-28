import React, { useEffect, useState, useRef } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { MenuStack } from './MainNavStack'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Preloader from '../components/Preloader'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import userActions from '../redux/actions/userActions'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Hero from '../screens/Hero'
import CartBottom from './MainNavBottom'
import Profile from '../screens/Profile'

const Drawer = createDrawerNavigator()

const MainNavDrawer = ({ user, ...props }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const verificate = async () => {
      const token = await AsyncStorage.getItem('token')
      if (!token) return false
      props.validateToken(token)
    }
    verificate()
  }, [])

  const resetUser = () => {
    setLoading(true)
    props.logOut()
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  if (loading) {
    return <Preloader message='Hasta pronto...' />
  }

  const DrawerInsta = (props) => (
    <DrawerContentScrollView {...props}>
      {/* {console.log(props.navi)} */}
      {
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <>
            {user && user.src && (
              <Pressable onPress={({ navigation }) => navigation.navigate('Profile')}>
                <Image
                  source={{ uri: user.src }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    marginRight: 20,
                  }}
                />
              </Pressable>
            )}
            <Text
              style={{
                fontFamily: 'LatoRegular',
                fontSize: 24,
                textAlign: 'center',
              }}
            >
              {user ? 'Hi ' + user.firstName + '!' : 'Quickly'}
            </Text>
          </>
        </View>
      }
      <DrawerItemList {...props} />
      {user && (
        <DrawerItem
          icon={() => <Ionicons name='log-out-outline' size={24} color='black' />}
          label='Log Out'
          onPress={() => {
            resetUser()
            props.navigation.navigate('home')
          }}
          labelStyle={{
            fontFamily: 'LatoRegular',
            fontSize: 18,
            color: 'black',
          }}
        />
      )}
    </DrawerContentScrollView>
  )
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#F2EBEA',
          width: 240,
        },
        drawerLabelStyle: {
          color: 'black',
          // fontFamily: "Lato",
          fontSize: 18,
        },
        drawerActiveBackgroundColor: 'rgba(185,166,152,0.3)',
        headerShown: false,
      }}
      drawerContent={(props) => <DrawerInsta {...props} />}
    >
      {user && (
        <>
          <Drawer.Screen
            name='Home'
            component={CartBottom}
            initialParams={user}
            options={{ drawerIcon: () => <Ionicons name='home-outline' size={24} color='black' /> }}
          />
          <Drawer.Screen
            name='Menu'
            component={MenuStack}
            options={({ navigation }) => {
              return {
                title: 'Menú',
                drawerIcon: () => <Ionicons name='fast-food-outline' size={24} color='black' />,
                headerShown: false,
              }
            }}
          />
          <Drawer.Screen
            name='Profile'
            component={Profile}
            options={({ navigation }) => {
              return {
                title: 'Perfil',
                drawerIcon: () => <Ionicons name='person-outline' size={24} color='black' />,
                headerTitle: 'Perfil de usuario',
                headerLeft: () => (
                  <Pressable
                    onPress={() => {
                      navigation.goBack()
                    }}
                  >
                    <View style={{ marginHorizontal: 20 }}>
                      <AntDesign name='back' size={24} color='black' />
                    </View>
                  </Pressable>
                ),
              }
            }}
          />
        </>
      )}
      {!user && (
        <>
          <Drawer.Screen
            name='hero'
            component={Hero}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name='Login'
            component={LogIn}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name='Signup'
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.userData?.data,
  }
}
const mapDispatchToProps = {
  validateToken: userActions.verifyToken,
  logOut: userActions.logOut,
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavDrawer)
