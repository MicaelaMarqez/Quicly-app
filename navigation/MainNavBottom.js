import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import React, { useEffect } from "react"
import Home from "../screens/Home"
import LogIn from "../screens/LogIn"
import Profile from "../screens/Profile"
import SignUp from "../screens/SignUp"
import Menu from "../screens/Menu"

const Bottom = createBottomTabNavigator()


const Navigator = () => {
	return(
		<Bottom.Navigator >
			<Bottom.Screen name="homeBottom"   component={Home}/>
			<Bottom.Screen name="MenuBottom" component={Menu}/>
			<Bottom.Screen name="ProfileBottom"  component={Profile}/>
			<Bottom.Screen name="SignUpBottom" component={SignUp}/>
			<Bottom.Screen name="LogInBottom" component={LogIn}/>	
		</Bottom.Navigator>
	)
}

export default Navigator