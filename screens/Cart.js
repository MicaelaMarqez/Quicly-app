import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CartItem from '../components/CartItem'

const Cart = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen de mi pedido</Text>
            <ScrollView style={styles.productsContainer}>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </ScrollView>
            <View style={styles.resume}>
                <Text>Mi pedido</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#fff' }}> Pagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    title: {
        marginVertical: 30,
        fontSize: 20,
        color: '#fe6849',
        fontWeight: '700'
    },
    productsContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    resume: {
        width: '100%',
        height: 120,
        backgroundColor: 'red'
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
})