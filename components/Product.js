import React, { useState } from "react"
import Exit from 'react-native-vector-icons/Fontisto';
import { View, Modal, Text, StyleSheet, ImageBackground } from 'react-native'
import { color } from "react-native-reanimated";

const Product = (props) => {
    const friesSizes = [
        { size: 'Chicas', cost: 0 },
        { size: 'Medianas', cost: 30 },
        { size: 'Grandes', cost: 50 },
    ]
    const extrasChoices = [
        { type: 'Carne', cost: 100 },
        { type: 'Queso', cost: 50 },
        { type: 'Cebolla', cost: 30 },
    ]
    const drinkChoices = [
        { type: 'Sin bebida', cost: 0 },
        { type: 'Coca-Cola (500cc)', cost: 100 },
        { type: 'Sprite (500cc)', cost: 100 },
        { type: 'Fanta (500cc)', cost: 100 },
    ]
    const productItem = {
        _id: 1,
        name: "Anvorguesa",
        img: "/assets/products/6161b670f71503b72528685f.jpg",
        category: "hamburguesa",
        description: "la más grande la mas beia",
        price: 500,
        ingredients: "tomaco, mustarda, vaca procesada",
        multipleDrinks: true,
        extras: true,
        papas: true,
        score: 5,
        stock: 5
    } //props
    const item = {
        productId: productItem._id,
        clarifications: '',
        fries: friesSizes[0],
        extras: [],
        drink: drinkChoices[0],
        unitaryPrice: productItem.price,
        totalAmount: 1,
        totalPrice: productItem.price,
    }

    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.main}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
                style={styles.card}
            >
                <Exit
                    name='close'
                    size={25}
                    color='grey'
                    style={styles.exit}
                    onPress={() => setModalVisible(false)}/>
                <Text style={styles.cardTitle}>{productItem.name}</Text>
                <ImageBackground source={{ uri: `https://quickly-food.herokuapp.com${productItem.img}` }} style={styles.image}>
                </ImageBackground>
                <Text>Descripción:</Text>
                <Text>{productItem.description}</Text>
            </Modal>
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    card:{
        width: "50%",
        height: "87%",
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 7,
        paddingVertical: 7
    },
    exit:{
        alignSelf: "flex-end"
    },
    cardTitle:{
        fontSize: 30,
        fontWeight: "bold",
        color:'#fe6849'
    },
    image:{
        width: "100%",
        height: "50%",
        marginVertical: 8,
    }
})