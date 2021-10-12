import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native'

const DataProfile = (props) => {
    const [updateData, setUpdateData] = useState({
		firstName: "Juan",
		lastName: "Carlos",
	})
	console.log(updateData)
	const inputHandler = (e, campo, value) => {
		setUpdateData({
			...updateData,
			[campo]: e || value
		})
	} 

	const cancelUpadte = () => {
		setUpdateData({
		firstName: "Juan",
		lastName: "Carlos"
		})
	}

	const dataUpdate = () => {
		let verification = Object.values(updateData).some((prop) => prop === "")
		if(verification) return console.log("no podes modificar esto sin nada")
		console.log(updateData)
	}
    return (
		<View style={styles.containAll}>
			<View style={styles.containInputs}>
				<Text style={styles.textTitleInputs}>Nombre</Text>
				<TextInput 
				placeholder="Nombre"
				placeholderTextColor="#333333"
				color="black"
				defaultValue={updateData.firstName}
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "firstName")}
				/>
				<Text style={styles.textTitleInputs}>Apellido</Text>
				<TextInput 
				placeholder="Apellido"
				placeholderTextColor="#333333"
				color="black"
				defaultValue={updateData.lastName}
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "lastName")}
				/>
				<Text style={styles.textTitleInputs}>Email</Text>
				<TextInput 
				placeholder="Email"
				defaultValue={"Juancarlos@gmail.com"}
				placeholderTextColor="#333333"
				color="black"
				style={styles.inputSignUp}
				onChangeText={(e) => inputHandler(e, "email")}
				/>
				<View style={styles.containerButtons}>
					<Pressable style={styles.button} onPress={cancelUpadte}>
						<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }}>Cancelar</Text>
					</Pressable>
					<Pressable style={styles.button} onPress={dataUpdate}>
						<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }}>Cambiar</Text>
					</Pressable>
				</View>
			</View>
		
		</View>
    )
}

export default DataProfile

const styles = StyleSheet.create({
	containAll:{
		width: "100%",
		height: 600,
		alignItems: "center",
		paddingTop: 20,

	},
	containInputs:{
		width: "95%",
		height: "85%",
		paddingTop: 25,
		alignItems: "center"
	},
	inputSignUp:{
		backgroundColor: 'white',
		width: '95%',
		height: "13%",
		borderRadius: 10,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 6,
		marginBottom: 20,
		fontSize: 23,
		fontWeight: "bold",
		shadowColor: "#000",
		shadowOffset: {
		width: 5,
		height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 1,
		elevation: 2,
	},
	textTitleInputs:{
		fontWeight: "600",
		fontSize: 18,
		color: "grey",
		marginBottom: 10,
	},
	containerButtons:{
		flexDirection: "row",
		width: "100%",
		padding: 10,
		alignItems: "center",
		justifyContent: "center"
	},
	button: {
		backgroundColor: "#fe6849",
		width: "50%",
		borderRadius: 5,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: {
		width: 5,
		height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
		margin: 5,
	}
})