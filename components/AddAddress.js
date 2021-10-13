import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TextInput, ImageBackground } from 'react-native'

const AddAddress = ({setModalVisible}) => {
	const [addAddress, setAddAddress] = useState({
		alias: "",
		street: "",
		number: "",
		apartment: "",
		neighborhood: ""
	})

	const inputHandler = (e, campo, value) => {
		setAddAddress({
			...addAddress,
			[campo]: e || value
		})
	} 

	const dataUpdate = () => {
		let verification = Object.values(addAddress).some((prop) => prop === "" || !prop)
		if(verification) return console.log("LLENA LOS CAMPOS PETE")
		console.log(addAddress)
	}

	const confirm = () => {
		let verification = Object.values(addAddress).some((prop) => prop !== "")
		if(verification) console.log("tenes cambios, frenar a la persona aca y preguntar si esta seguro")
		setModalVisible(false)
	}

    return (
        <View style={styles.container}>
			<View style={styles.container}>
				<View style={styles.containerClose}>
					<Pressable style={styles.containerCloseImage} onPress={confirm}>
						<ImageBackground resizeMode="cover" style={styles.imageClose} source={{uri: "https://st.depositphotos.com/1734074/3308/v/600/depositphotos_33083835-stock-illustration-vector-close-icon.jpg"}}>
						</ImageBackground>
					</Pressable>
				</View>
				<TextInput 
					placeholder="Alias"
					placeholderTextColor="#333333"
					color="black"
					style={styles.inputAddAddress}
					onChangeText={(e) => inputHandler(e, "alias")}
					/>
					<TextInput 
					placeholder="Calle"
					placeholderTextColor="#333333"
					color="black"
					style={styles.inputAddAddress}
					onChangeText={(e) => inputHandler(e, "street")}
					/>
					<TextInput 
					placeholder="Numeración"
					placeholderTextColor="#333333"
					color="black"
					style={styles.inputAddAddress}
					onChangeText={(e) => inputHandler(e, "number")}
					/>
					<TextInput 
					placeholder="Departamento"
					placeholderTextColor="#333333"
					color="black"
					style={styles.inputAddAddress}
					onChangeText={(e) => inputHandler(e, "apartment")}
					/>
					<TextInput 
					placeholder="Barrio / Partido / Localidad"
					placeholderTextColor="#333333"
					color="black"
					style={styles.inputAddAddress}
					onChangeText={(e) => inputHandler(e, "neighborhood")}
					/>
					<View style={styles.containerButton}>
						<Pressable style={styles.button} onPress={dataUpdate}>
							<Text style={{ textAlign: 'center', color: 'white', fontSize: 19 }}>Agregar Dirreción</Text>
						</Pressable>
					</View>
			</View>	
        </View>
    )
}

export default AddAddress

const styles = StyleSheet.create({
    container: {
        width:"100%",
    },
	inputAddAddress:{
		backgroundColor: 'white',
		width: '100%',
		height: "11%",
		borderRadius: 10,
		paddingBottom: 5,
		paddingLeft: 15,
		paddingRight: 15,
		paddingTop: 6,
		marginBottom: 20,
		fontSize: 19,
		shadowColor: "#000",
		shadowOffset: {
		width: 5,
		height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	},
	containerClose:{
		width: "100%",
		alignItems: "flex-end",
		marginBottom: 15,
		paddingBottom: 10,
	},
	containerCloseImage:{
		width: 50,
		height: 50,
	},
	imageClose:{
		height: "100%",
		width: "100%",
		overflow: "hidden",
		borderRadius: 30,
	},
	containerButton:{
		width: "100%",
		alignItems: "center"
	},
	button: {
		backgroundColor: "#fe6849",
		width: "50%",
		borderRadius: 10,
		padding: 1,
		shadowColor: "#000",
		shadowOffset: {
		width: 5,
		height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	}
})