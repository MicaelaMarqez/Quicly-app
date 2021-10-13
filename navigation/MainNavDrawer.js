import React, { useEffect } from "react"
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer"
import Home from '../screens/Home'
import LogIn from '../screens/LogIn'
import Profile from '../screens/Profile'
import SignUp from '../screens/SignUp'
import Menu from '../screens/Menu'
import { Image, Pressable, Text, View } from "react-native"
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons"
import { connect } from "react-redux"

const Drawer = createDrawerNavigator()

const MainNavDrawer = ({ user, ...props }) => {
  // useEffect(() => {
  //   props.validateToken()
  // }, [])

  console.log(user)

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
            // resetUser()
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
            name="home"
            component={Home}
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
            name="menu"
            component={Menu}
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
            name="profile"
            component={Profile}
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
            name="login"
            component={LogIn}
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
            name="signup"
            component={SignUp}
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
}
export default connect(mapStateToProps, mapDispatchToProps)(MainNavDrawer)