import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"

import { useToast, Box } from "native-base"

const SignUp = (props) => {
	const toast = useToast()
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		src: 'https://quickly-food.herokuapp.com/assets/user.png',
		google: false,
		action: 'sign'

	})
	const [repPass, setRepPass] = useState('')

	const inputHandler = (e, campo, value) => {
		setUser({
			...user,
			[campo]: e || value
		})
	}


	const submit = async () => {
		let inputs = Object.values(user).some((input) => input === "")
		let message
		if (!inputs) {
			let verification = user.password === repPass ? true : false
			try {
				if (!verification) throw new Error('Las contaseñas deben coincidir')
				let response = await props.createUser(user)
				if (response.error) {
					return response.error.map(error => console.log(error))
				} else if (response.success) {
					message = 'Usuario creado exitosamente'
				}
			} catch (error) {
				message = error.message
			}
		} else {
			message = 'Todos los campos son obligatorios.'
		}
		toast.show({
			placement: 'top',
			render: () => {
				return (
					<Box bg="warning.600" px="4" py="15" rounded="sm" mb={5}>
						{message}
					</Box>
				)
			},
		})
	}


	return (
		<View style={styles.containAll}>
			<View style={styles.containInputs}>
				<TextInput
					placeholder="Nombre"
					placeholderTextColor="#aaa"
					color="black"
					style={styles.inputSignUp}
					onChangeText={(e) => inputHandler(e, "firstName")}
				/>
				<TextInput
					placeholder="Apellido"
					placeholderTextColor="#aaa"
					color="black"
					style={styles.inputSignUp}
					onChangeText={(e) => inputHandler(e, "lastName")}
				/>
				<TextInput
					placeholder="Email"
					placeholderTextColor="#aaa"
					color="black"
					style={styles.inputSignUp}
					onChangeText={(e) => inputHandler(e, "email")}
				/>
				<TextInput
					placeholder="Contraseña"
					placeholderTextColor="#aaa"
					color="black"
					secureTextEntry={true}
					password={true}
					style={styles.inputSignUp}
					onChangeText={(e) => inputHandler(e, "password")}
				/>
				<TextInput
					placeholder="Repite contraseña"
					placeholderTextColor="#aaa"
					color="black"
					secureTextEntry={true}
					password={true}
					style={styles.inputSignUp}
					onChangeText={(e) => setRepPass(e)}
				/>
			</View>

			<TouchableOpacity style={styles.button} onPress={submit}>
				<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }}>Crear Cuenta</Text>
			</TouchableOpacity>
			<Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>¿Tenes cuenta?</Text>
			<Pressable onPress={() => props.navigation.navigate('login')}>
				<Text style={{ color: "#fe6849", fontSize: 19, textAlign: 'center', textDecorationLine: 'underline' }}>Ingresar</Text>
			</Pressable>
		</View>
	)
}
const mapDispatchToProps = {
	createUser: userActions.createUser
}

export default connect(null, mapDispatchToProps)(SignUp)


const styles = StyleSheet.create({
	containAll: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		paddingTop: 20,
	},
	containInputs: {
		width: "90%",
		height: "75%",
		alignItems: "center",
		paddingTop: 25,
	},
	inputSignUp: {
		backgroundColor: 'white',
		width: '75%',
		height: 70,
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