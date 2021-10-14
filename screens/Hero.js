import React from 'react'
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
const Hero = () => {
    return (
        
        <ImageBackground source={{ uri: 'https://i.postimg.cc/C5T0P2YM/hamburguesa.png' }} style={styles.imageHero}>
            <StatusBar backgroundColor="#E6A07C" barStyle="light-content"/> 
            <View style={styles.contenedorHero}>
                {/* <Image source={require('../assets/logooriginal.png')} style={styles.logo} /> */}
                {/* <Text style={styles.titulo}>MYtinerary</Text> */}
                <View style={styles.callToAction}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('home')} style={styles.button}>
                        <Text style={{ color: 'white', fontSize: 22, textAlign: 'center' }}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    contenedorHero: {
        marginTop: '30%',
        alignItems: 'center',
        height: '100%'
    },
    imageHero: {
        width: '100%',
        height: 760,
    },
    titulo: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white'
    },
    logo: {
        width: '40%',
        height: '20%',
        resizeMode: 'contain'
    },
    button: {
        marginTop: '60%',
        backgroundColor: '#ff9566',
        borderRadius: 30,
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 10,
        paddingTop: 10,
        width: '100%',
    }
})
export default Hero