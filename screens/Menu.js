import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from "react-native"
import { connect } from "react-redux"
import productActions from '../redux/actions/productActions'
import CategorySection from "../components/CategorySection"
import Preloader from "../components/Preloader"
import { NativeBaseProvider, Button } from 'native-base';
import CategoryList from "../components/CategoryList"



const Menu = (props) => {
	const [loader, setLoader] = useState(true)
	const [filteredView, setFilteredView] = useState(false)

	const categories = []
	props.products.map(product => {
		if (!categories.includes(product.category)) {
			return categories.push(product.category)
		}
	})


	const getProducts = async () => {
		try {
			await props.getProducts()
			setLoader(false)
		} catch (error) {

		}
	}

	useEffect(() => {
		setTimeout(() => {
			getProducts()
		}, 10000)
	}, [])

	if (loader) {
		return <Preloader />
	}
	const getFiltered = (word) => {
		if (word.length) {
			setFilteredView(true)
			props.getFiltered(word)
		} else {
			setFilteredView(false)
		}
	}

	return (
		<NativeBaseProvider>
			<ScrollView style={styles.container}>
				<ImageBackground style={styles.image} source={{ uri: 'https://innovacioneconomica.com/wp-content/uploads/2021/01/Captura-de-Pantalla-2021-01-19-a-las-11.56.09.png' }}>
					<Text style={styles.title}>Nuestros Productos</Text>
				</ImageBackground>
				<View>
					<TextInput placeholder="¿Qué quieres pedir?" style={styles.searcher} onChange={(e) => getFiltered(e.nativeEvent.text)} />
				</View>
				{filteredView
					? !props.filtered.length
						? <View style={styles.message}>
							<Text style={styles.messageTitle}>Sin resultados</Text>
							<Text style={styles.messageSubTitle}>Intente con otro término</Text>
						</View>
						: props.filtered.map(product => <CategoryList product={product} key={product._id} />)
					: categories.map(category => {
						let products = props.products.filter(product => product.category === category)
						return <CategorySection products={products} key={category} category={category} />
					})}
			</ScrollView>
		</NativeBaseProvider>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.users.user,
		products: state.products.products,
		filtered: state.products.filtered,
	}
}
const mapDispatchToProps = {
	getProducts: productActions.getProducts,
	getFiltered: productActions.getFilteredList
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
	},
	contenedor: {
		width: '90%',
	},
	searcher: {
		width: '80%',
		height: 40,
		padding: 10,
		paddingHorizontal: 20,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: "#fe6849",
		alignSelf: "center",
		borderStyle: "solid",
		color: '#444',
		marginBottom: 30,
		backgroundColor: 'white'
	},
	image: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30
	},
	title: {
		backgroundColor: 'rgba(255, 255, 255, 0.5)',
		paddingVertical: 5,
		paddingHorizontal: 8,
		textAlign: 'center',
		fontSize: 25
	}, message: {
		alignItems: 'center',
		marginTop: 20
	},
	messageTitle: {
		fontWeight: '700',
		fontSize: 17,
		textAlign: 'center'
	},
	messageSubTitle: {
		fontSize: 15,
		fontWeight: "500",
		textAlign: 'center'
	}
});