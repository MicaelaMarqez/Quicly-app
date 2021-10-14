import React from "react"
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Pressable } from "react-native"
import MyCarousel from "../components/Carousel"
import CarouselHome from "../components/CarouselHome"

const Home = (props) => {
	return (
		<ScrollView >
			<View style={styles.containHeader}>
				<View style={styles.containerCarouselBody}>
					<CarouselHome />
				</View>
				<ImageBackground style={styles.logo} resizeMode="contain" source={{ uri: 'https://quickly-food.herokuapp.com/assets/quicklyLogo.png' }} >
				</ImageBackground>
				<View style={styles.containerCard}>
					<View style={styles.boxCard}>
						<View style={styles.cardHome}>
							<ImageBackground resizeMode="contain" source={{ uri: "https://i.postimg.cc/pr9w1gTY/hamburguesas.webp" }} style={styles.imageCard}>
							</ImageBackground>
						</View>
						<View style={styles.cardHome}>
							<ImageBackground resizeMode="contain" source={{ uri: "https://i.postimg.cc/13zjWkjg/pizza.webp" }} style={styles.imageCard}>
							</ImageBackground>
						</View>
					</View>
					<View style={styles.boxCard}>
						<View style={styles.cardHome}>
							<ImageBackground resizeMode="contain" source={{ uri: "https://i.postimg.cc/wTwWsWj9/saludable.webp" }} style={styles.imageCard}>
							</ImageBackground>
						</View>
						<View style={styles.cardHome}>
							<ImageBackground resizeMode="contain" source={{ uri: "https://i.postimg.cc/HsdnRzHD/milanesas.webp" }} style={styles.imageCard}>
							</ImageBackground>
						</View>
					</View>
				</View>
				<TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Menu')}>
					<Text style={{ textAlign: 'center', color: 'white', fontSize: 22 }}>Ver mas</Text>
				</TouchableOpacity>
			</View>

		</ScrollView>
	)
}

export default Home

const styles = StyleSheet.create({
	logo: {
		marginTop: 30,
		height: 30,
		width: "100%",
	},
	containHeader: {
		flex: 1,
		alignItems: "center",
		width: '100%'
		// paddingTop: 20,
	},
	containerCard: {
		height: 350,
		width: "100%",
		alignItems: "center",
		justifyContent: "center"
	},
	boxCard: {
		height: "40%",
		width: "90%",
		margin: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 5
	},
	cardHome: {
		height: "100%",
		width: "45%",
		margin: 5,
		backgroundColor: "white",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	},
	imageCard: {
		height: "100%",
		width: "100%"
	},
	button: {
		backgroundColor: "#fe6849",
		width: "50%",
		borderRadius: 10,
		padding: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
		marginBottom: 20,
	},
	containerCarouselBody: {
		height: 200,
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 5,
			height: 5,
		},
		shadowOpacity: 1,
		shadowRadius: 15,
		elevation: 5,
	}
});



{/* <View style={styles.ContainCarousel}>
					<MyCarousel style={styles.caru}/>
				</View> */}

				// ContainCarousel:{
				// 	width: "50%",
				// 	height: "100%",
				// 	backgroundColor: "red",
				// 	alignItems: "center",
				// 	justifyContent: "flex-end"
				// }