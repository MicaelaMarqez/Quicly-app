import React, { useEffect, useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
import { HomeStack, MenuStack, LoginStack, SignUpStack, ProfileStack, ProductStack } from './MainNavStack'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"

// import Home from '../screens/Home'
// import Menu from '../screens/Menu'
// import Profile from '../screens/Profile'
// import LogIn from '../screens/LogIn'
// import SignUp from '../screens/SignUp'
// import Preloader from "../components/Preloader"

import {
  AntDesign,
  Ionicons,
} from "@expo/vector-icons"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckOut from '../screens/CheckOut'

const Drawer = createDrawerNavigator()

const MainNavDrawer = ({ user, ...props }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const verificate = async () => {
      const token = await AsyncStorage.getItem("token")
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
      {
        <View
          style={{
            flexDirection: "row",
            marginVertical: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <>
            {user && user.src && (
              <Image
                source={{ uri: user.src }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  marginRight: 20,
                }}
              />
            )}
            <Text
              style={{
                // fontFamily: "LatoRegular",
                fontSize: 24,
                textAlign: "center",
              }}
            >
              {user ? "Hi " + user.firstName + "!" : "Quickly"}
            </Text>
          </>
        </View>
      }
      <DrawerItemList {...props} />
      {user && (
        <DrawerItem
          icon={() => (
            <Ionicons name="log-out-outline" size={24} color="black" />
          )}
          label="Log Out"
          onPress={() => {
            resetUser()
            props.navigation.navigate("home")
          }}
          labelStyle={{
            // fontFamily: "Lato", 
            fontSize: 18, color: "black"
          }}
        />
      )}
    </DrawerContentScrollView>
  );

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#F2EBEA",
          width: 240,
        },
        drawerLabelStyle: {
          color: "black",
          // fontFamily: "Lato",
          fontSize: 18,
        },
        drawerActiveBackgroundColor: "rgba(185,166,152,0.3)",
        headerTitleStyle: {
          // fontFamily: "LatoRegular", 
          fontSize: 24
        },
        headerStyle: {
          height: 80,
          backgroundColor: "#d4c9be",
        },
      }}
      drawerContent={(props) => <DrawerInsta {...props} />}
    >
      {user && (
        <>
          <Drawer.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerRight: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{
                      // fontFamily: "LatoRegular",
                      fontSize: 20,
                      textAlign: "center",
                      marginRight: 15,
                    }}
                  >
                    {user ? "Hi " + user.firstName + "!" : "Quickly"}
                  </Text>
                  {user && (
                    <Image
                      source={{ uri: user.src }}
                      style={{
                        width: 45,
                        height: 45,
                        borderRadius: 45,
                        marginRight: 15,
                        borderWidth: 1,
                        borderColor: "black",
                      }}
                    />
                  )}
                </View>
              ),
              title: "Inicio",
              drawerIcon: () => (
                <Ionicons name="home-outline" size={24} color="black" />
              ),
            }}
          />
          <Drawer.Screen
            name="Menu"
            component={MenuStack}
            options={({ navigation }) => {
              return {
                title: "Menú",
                drawerIcon: () => (
                  <Ionicons
                    name="fast-food-outline"
                    size={24}
                    color="black"
                  />
                ),
                headerTitle: "Nuestros Productos",
                headerLeft: () => (
                  <Pressable
                    onPress={() => {
                      navigation.goBack()
                    }}
                  >
                    <View style={{ marginHorizontal: 20 }}>
                      <AntDesign name="back" size={24} color="black" />
                    </View>
                  </Pressable>
                ),
              };
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileStack}
            options={({ navigation }) => {
              return {
                title: "Perfil",
                drawerIcon: () => (
                  <Ionicons name="person-outline" size={24} color="black" />
                ),
                headerTitle: "Perfil de usuario",
                headerLeft: () => (
                  <Pressable
                    onPress={() => {
                      navigation.goBack()
                    }}
                  >
                    <View style={{ marginHorizontal: 20 }}>
                      <AntDesign name="back" size={24} color="black" />
                    </View>
                  </Pressable>
                ),
              };
            }}
          />
        </>
      )}
      {!user && (
        <>
          <Drawer.Screen
            name="Login"
            component={LoginStack}
            options={({ navigation }) => {
              return {
                title: "Ingresar",
                headerTitle: "Bienvenido",
                drawerIcon: () => (
                  <Ionicons name="log-in-outline" size={24} color="black" />
                ),
              }
            }}
          />
          <Drawer.Screen
            name="Signup"
            component={SignUpStack}
            options={({ navigation }) => {
              return {
                title: "Registrarse",
                headerTitle: "Creá tu cuenta",
                drawerIcon: () => (
                  <Ionicons name="person-add-outline" size={24} color="black" />
                ),
              }
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
  logOut: userActions.logOut
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavDrawer)