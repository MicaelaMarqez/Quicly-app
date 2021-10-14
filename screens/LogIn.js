import React, { useState } from "react"
import { Text, View, StyleSheet, TextInput, Pressable, TouchableOpacity } from "react-native"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import { useToast, Box } from "native-base"

const LogIn = (props) => {
	const toast = useToast()
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

	const submit = async () => {
		let inputs = Object.values(user).some((input) => input === "")
		let message
		if (!inputs) {
			try {
				let response = await props.logUser(user)
				if (response.success) {
					message = 'Ingreso correcto.'
				} else {
					message = 'Correo y/o contraseña incorrecto.'
				}
			} catch (error) {
				message = 'Ocurrió un problema. Intente más tarde.'
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
					placeholder="Email"
					placeholderTextColor="#aaa"
					color="black"
					style={styles.inputLogIn}
					onChangeText={(e) => inputHandler(e, "email")}
				/>
				<TextInput
					placeholder="Contraseña"
					placeholderTextColor="#aaa"
					color="black"
					secureTextEntry={true}
					password={true}
					style={styles.inputLogIn}
					onChangeText={(e) => inputHandler(e, "password")}
				/>
			</View>
			<TouchableOpacity style={styles.button} onPress={submit}>
				<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }} >Ingresar</Text>
			</TouchableOpacity>
			<Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>¿No tenes cuenta?</Text>
			<Pressable onPress={() => props.navigation.navigate('signup')}>
				<Text style={{ color: "#fe6849", fontSize: 19, textAlign: 'center', textDecorationLine: 'underline' }}>Crear cuenta</Text>
			</Pressable>
		</View>
	)
}
const mapDispatchToProps = {
	logUser: userActions.logUser
}

export default connect(null, mapDispatchToProps)(LogIn)

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
		justifyContent: "center",
		paddingTop: 25,
	},
	inputLogIn: {
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