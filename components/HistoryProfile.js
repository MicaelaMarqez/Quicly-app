import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'

const HistoryProfile = (props) => {
    const [view, setView] = useState(true)

    const item = [
        [{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpxL52Kc_MRjvlRYE3jj6fPBWXmdgbykPgg3YVjlBQsjhga2v_rpES_LazZSFKAcK98k&usqp=CAU",
            titulo: "Producto magic",
            total: 1500,
            id: 1,
        },
        {
            src: "https://media.istockphoto.com/photos/hamburger-on-an-orange-background-3d-rendering-picture-id1268438591?b=1&k=6&m=1268438591&s=170667a&w=0&h=m6xM6v3JGHpZwo0jOx6XGdM6i7aeplvoygMIdxSE7c8=",
            titulo: "Producto magic",
            total: 1500,
            id: 12,
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpxL52Kc_MRjvlRYE3jj6fPBWXmdgbykPgg3YVjlBQsjhga2v_rpES_LazZSFKAcK98k&usqp=CAU",
            titulo: "Producto magic",
            total: 1500,
            id: 13,
        }],
        [{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpxL52Kc_MRjvlRYE3jj6fPBWXmdgbykPgg3YVjlBQsjhga2v_rpES_LazZSFKAcK98k&usqp=CAU",
            titulo: "Producto magic",
            total: 1500,
            id: 14,
        },
        {
            src: "https://media.istockphoto.com/photos/hamburger-on-an-orange-background-3d-rendering-picture-id1268438591?b=1&k=6&m=1268438591&s=170667a&w=0&h=m6xM6v3JGHpZwo0jOx6XGdM6i7aeplvoygMIdxSE7c8=",
            titulo: "Producto magic",
            total: 1500,
            id: 15,
        }],
        [{
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpxL52Kc_MRjvlRYE3jj6fPBWXmdgbykPgg3YVjlBQsjhga2v_rpES_LazZSFKAcK98k&usqp=CAU",
            titulo: "Producto magic",
            total: 1500,
            id: 16,
        },
        {
            src: "https://media.istockphoto.com/photos/hamburger-on-an-orange-background-3d-rendering-picture-id1268438591?b=1&k=6&m=1268438591&s=170667a&w=0&h=m6xM6v3JGHpZwo0jOx6XGdM6i7aeplvoygMIdxSE7c8=",
            titulo: "Producto magic",
            total: 1500,
            id: 17,
        },
        {
            src: "https://media.istockphoto.com/photos/hamburger-on-an-orange-background-3d-rendering-picture-id1268438591?b=1&k=6&m=1268438591&s=170667a&w=0&h=m6xM6v3JGHpZwo0jOx6XGdM6i7aeplvoygMIdxSE7c8=",
            titulo: "Producto magic",
            total: 1500,
            id: 18,
        }]
    ]
    return (
        <View style={styles.containerAll}>
			{item.map((i) => 
                    <View style={styles.container}>               
                        {i.map((product) => 
                            <View style={styles.containerCard}>
                                <View style={styles.containerCards}>
                                    <ImageBackground source={{uri: product.src}} style={styles.imageHystorial}>
                                    </ImageBackground>
                                </View>
                                <View style={styles.containerCards}>
                                    <Text style={styles.textCard}>{product.titulo}</Text>
                                </View>
                                <View style={styles.containerCards}>
                                    <Text style={styles.textCard}>$ {product.total}</Text>
                                </View>
                            </View>
                        )}                 
                    </View>
            )}
        </View>
    )
}

export default HistoryProfile

const styles = StyleSheet.create({
    containerAll: {
        width:"100%",
        marginBottom: 20,
        minHeight: 200,
        alignItems: "center",
        padding: 10
    },  
    imageHystorial:{
        height: 50,
        width: 50,
        overflow: "hidden",
        borderRadius: 10
    },
    container:{
        width: "100%",
        minHeight: 150,
        padding: 15,
        margin: 10, 
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 15,  
    },
    containerCard:{
        width: "100%",
        height: 70,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"

    },
    containerCards:{
        width: "35%",
        height: "100%",   
    },
    textCard:{
        textAlign: "center",
        
    }
})