import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, Pressable} from "react-native"
// import { connect } from "react-redux"
// import userActions from "../redux/actions/userActions"


const SignUp = (props) => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		repPass: '',
		src: null,
		google: false,
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
				placeholder="Nombre"
				placeholderTextColor="#333333"
				color="black"
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "firstName")}
				/>
				<TextInput 
				placeholder="Apellido"
				placeholderTextColor="#333333"
				color="black"
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "lastName")}
				/>
				<TextInput 
				placeholder="Email"
				placeholderTextColor="#333333"
				color="black"
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "email")}
				/>
				<TextInput 
				placeholder="Contraseña"
				placeholderTextColor="#333333"
				color="black"
				secureTextEntry={true}
				password = {true}
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "password")}
				/>
				<TextInput 
				placeholder="Repite Contraseña"
				placeholderTextColor="#333333"
				color="black"
				secureTextEntry={true}
				password = {true}
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "repPass")}
				/>
			</View>
			<Pressable style={styles.button}>
            	<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }} onPress={submit}>Crear Cuenta</Text>
        	</Pressable>
				<Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>Tenes cuenta ?</Text>
        	<Pressable onPress={() => props.navigation.navigate('LogIn')}>
          		<Text style={{ color: "#fe6849", fontSize: 19, textAlign: 'center', textDecorationLine: 'underline' }}>Ingresar</Text>
        	</Pressable>	
		</View>
	)
}
// const mapDispatchToProps = {
// 	createUser: userActions.createUser
// }

// export default connect(null, mapDispatchToProps)(SignUp)

export default SignUp

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
		paddingTop: 25,
	},
	inputSignUp:{
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