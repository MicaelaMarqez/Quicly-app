import React from "react"
import { Text, View, StyleSheet, ImageBackground, Image,TouchableOpacity,ScrollView} from "react-native"
import MyCarousel from "../components/Carousel"

const Home = (props) => {
	return(
		<ScrollView>
			<View style={styles.containHeader}>
				<View style={styles.containTitle}>

				</View>

				<View style={styles.ContainCarousel}>
					<MyCarousel style={styles.caru}/>
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
  });