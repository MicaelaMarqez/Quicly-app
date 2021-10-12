import React from "react"
import { Text, View, StyleSheet, ImageBackground, Image,TouchableOpacity,ScrollView} from "react-native"
import MyCarousel from "../components/Carousel"

const Home = (props) => {
	return(
		<ScrollView>
			<View style={styles.containHeader}>
				<View style={styles.containTitle}>
					<View style={styles.containImage}>
						<ImageBackground style={styles.logo} resizeMode="contain" source={{uri: 'https://i.postimg.cc/GmGSNwJh/quickly-Logo.png'}} >
						</ImageBackground>
						<Text style={styles.title} >
							Aca tiene que ir el titulo que vamos a poner de la pagina o no se lo que quieran poner para que quede mas lindo
						</Text>
					</View>
				</View>
				<View style={styles.ContainCarousel}>
					<MyCarousel style={styles.caru}/>
				</View>
			</View>	
			<View style={styles.containerBody}>
				<View style={styles.containerImageBody}>
					<View style={styles.Image}></View>
					<Text>Ya no tenés que perder tiempo cocinando. Pensá qué querés comer hoy y hacé tu pedido</Text>
				</View>
				<View style={styles.containerImageBody}>
					<Text>Te hacemos la vida más facil y te llevamos tu plato a tu casa</Text>
					<View style={styles.Image}></View>
				</View>
				<View style={styles.containerImageBody}>
					<View style={styles.Image}></View>
					<Text>Listo! Ahora disfrutá de tus comidas favoritas rápido, fácil y rico!</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default Home

const styles = StyleSheet.create({
	containHeader:{
		width: "100%",
		height: 400,
		flexDirection: "row",
	},
	containTitle:{
		height: "100%",
		width: "50%",
	},
	ContainCarousel:{
		width: "50%",
		height: "100%",
		backgroundColor: "red",
		alignItems: "center",
		justifyContent: "flex-end"
	},
	containImage:{
		height: "100%",
		width: "100%",
	},
	logo:{
		height: 100,
		width: "100%",
		backgroundColor: "red"
	},
	title:{
		flex: 1,
		backgroundColor:"red",
		fontSize: 25,
	},
	containerBody:{
		height: 600,
		width: "100%",
		backgroundColor: "blue",
		alignItems: "center",
		paddingTop: 30,
	},
	containerImageBody:{
		height: "30%",
		width: "80%"
	}
  });