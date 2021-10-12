import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView } from "react-native"
import { connect } from "react-redux"
import ProductCard from "../components/ProductCard"
import productActions from '../redux/actions/productActions'
import CategorySection from "../components/CategorySection"
import Preloader from "../components/Preloader"
// import { Button, Box } from 'native-base';
import { NativeBaseProvider, Button } from 'native-base';


const Menu = (props) => {
	const [loader, setLoader] = useState(true)

	const categories = []
	props.products.map(product=>{
		if(!categories.includes(product.category)){
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

	return (
		<NativeBaseProvider>
			<ScrollView style={styles.container}>
				{categories.map(category => {
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
	}
}
const mapDispatchToProps = {
	getProducts: productActions.getProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: 'center',
	},
	contenedor: {
		width: '90%',
	}
});