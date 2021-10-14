import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, Pressable} from "react-native"
// import { connect } from "react-redux"
// import userActions from "../redux/actions/userActions"


const LogIn = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	  })


	const inputHandler = (e, campo, value) => {
		setUser({
			...user,
			[campo]: e || value
		})
	}  

	const submit = () => {
		let inputs = Object.values(user).some((input) => input === "")
		if(!inputs){
			console.log("entre aca, esta todo bien, hacer el sign aca, mapear los errores abajo, segun la respuesta")
			console.log(user)
		}else{
			console.log("tenes que llenar los campos padre")
		}
	}


	return(
		
		<View style={styles.containAll}>
			<View style={styles.containInputs}>
				<TextInput 
				placeholder="Email"
				placeholderTextColor="#333333"
				color="black"
				style={styles.inputLogIn}
				onChangeText={(e) => inputHandler(e, "email")}
				/>
				<TextInput 
				placeholder="Contraseña"
				placeholderTextColor="#333333"
				color="black"
				secureTextEntry={true}
				password = {true}
				style={styles.inputLogIn}
				onChangeText={(e) => inputHandler(e, "password")}
				/>
			</View>
			<Pressable style={styles.button}>
            	<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }} onPress={submit}>Ingresar</Text>
        	</Pressable>
				<Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>No tenes cuenta ?</Text>
        	<Pressable onPress={() => props.navigation.navigate('SignUp')}>
          		<Text style={{ color: "#fe6849", fontSize: 19, textAlign: 'center', textDecorationLine: 'underline' }}>Crear cuenta</Text>
        	</Pressable>	
		</View>
	)
}
// const mapDispatchToProps = {
// 	logUser: userActions.logUser
// }

// export default connect(null, mapDispatchToProps)(LogIn)

export default LogIn

const styles = StyleSheet.create({
	containAll:{
		width: "100%",
		flex: 1,
		alignItems: "center",
		paddingTop: 20,

	},
	containInputs:{
		width: "90%",
		height: "75%",
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 25,
	},
	inputLogIn:{
		backgroundColor: 'white',
		width: '75%',
		height: "13%",
		borderRadius: 10,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 6,
		marginBottom: 20,
		fontSize: 22,
		textAlign: "center",
		shadowColor: "#000",
		shadowOffset: {
		width: 5,
		height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	},
	button: {
		marginTop: 25,
		marginBottom: 25,
		backgroundColor: "#fe6849",
		width: "50%",
		borderRadius: 10,
		padding: 10
	  }
  });