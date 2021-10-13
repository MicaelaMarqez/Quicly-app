import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from "react-native"
import { connect } from "react-redux"
import productActions from '../redux/actions/productActions'
import CategorySection from "../components/CategorySection"
import Preloader from "../components/Preloader"
import { NativeBaseProvider, Button } from 'native-base';
import CategoryList from "../components/CategoryList"



const Menu = (props) => {
	const [loader, setLoader] = useState(true)
	const [filteredView, setFilteredView] = useState(false)
	const [selected, setSelected] = useState('')

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

	const picture = {
		Hamburguesas: 'https://i.postimg.cc/Y0G90FNK/hamburguesas.png',
		Empanadas: 'https://i.postimg.cc/L5WSFfyC/empanadas.png',
		Pizzas: 'https://i.postimg.cc/1XkzqzMg/pizzas.png',
		Lomos: 'https://i.postimg.cc/bJFrqgt9/lomos.png',
		Sandiwch: 'https://i.postimg.cc/bJFrqgt9/lomos.png',
		todos: 'https://i.postimg.cc/Rh7qTvvV/todos.png',
	}

	return (
		<NativeBaseProvider>
			<ScrollView style={styles.container}>
				<ImageBackground style={styles.image} source={{ uri: 'https://innovacioneconomica.com/wp-content/uploads/2021/01/Captura-de-Pantalla-2021-01-19-a-las-11.56.09.png' }}>
				</ImageBackground>
				<TextInput placeholder="¿Qué quieres pedir?" style={styles.searcher} onChange={(e) => getFiltered(e.nativeEvent.text)} />
				<View style={styles.categoriesCards}>
					{categories.map(category => {
						return (
							<TouchableOpacity style={styles.categoryCard} key={category} onPress={() => setSelected(category)}>
								<Image style={styles.categoryPic} source={{ uri: picture[category] }} />
								<Text>{category}</Text>
							</TouchableOpacity>
						)
					})}
					<TouchableOpacity style={styles.categoryCard} onPress={() => setSelected('')}>
						<Image style={styles.categoryPic} source={{ uri: picture.todos }} />
						<Text>Ver Todos</Text>
					</TouchableOpacity>
				</View>
				{filteredView
					? !props.filtered.length
						? <ScrollView style={styles.message}>
							<Text style={styles.messageTitle}>Sin resultados</Text>
							<Text style={styles.messageSubTitle}>Intente con otro término</Text>
						</ScrollView>
						: props.filtered.map(product => <CategoryList product={product} key={product._id} />)
					: categories.filter(category => category.includes(selected)).map(category => {
						let products = props.products.filter(product => product.category === category)
						return <CategorySection navigation={props.navigation} products={products} key={category} category={category} />
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
		marginBottom: 40,
		backgroundColor: 'white'
	},
	image: {
		width: '100%',
		height: 200,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50
	},
	message: {
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
	},
	categoriesCards: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		paddingHorizontal: 22,
		marginBottom: 60
	},
	categoryCard: {
		width: '30%',
		height: 100,
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: 'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 2,
			height: 2,
		},
		shadowOpacity: 5,
		shadowRadius: 10,
		elevation: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	categoryPic: {
		width: '50%',
		height: '50%'
	}
});