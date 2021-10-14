import React, { useEffect, useState } from "react"
import Back from 'react-native-vector-icons/Entypo'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { RadioButton, Checkbox, TextInput } from 'react-native-paper'
import { connect } from "react-redux"
import productActions from "../redux/actions/productActions"


const Product = (props) => {
    const [chosen, setChosen] = useState({})
    useEffect(() => {
        let chosenProduct = props.products.filter(product => product._id === props.route.params.id)
        setChosen(chosenProduct[0])
    }, [])
    console.log(chosen)
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
    const product = {
        _id: "6161fd027018fe35545892a1",
        category: "Lomos",
        description: "Increible sabor",
        extras: true,
        favs: Array[
            "615f7629bc3b2e7315f0088f"
        ],
        fries: true,
        img: "/assets/products/6161fd027018fe35545892a1.jpg",
        ingredients: Array[
            "cerdo, lechuga, huevo, queso, jamon, tomate"
        ],
        multipleDrinks: false,
        name: "Lomo de Cerdo Completo",
        price: 680,
        score: 3.7,
        stock: 5
    }
    const initialCartItem = {
        productId: product._id,
        clarifications: '',
        fries: friesSizes[0],
        extras: [],
        drink: drinkChoices[0],
        unitaryPrice: product.price,
        totalAmount: 1,
        totalPrice: product.price,
    }
    const [cartItem, setCartItem] = useState(/*edit ? editCartItem :*/ initialCartItem)

    const addExtras = (extra, e) => {
        if (e === 'checked') {
            setCartItem({ ...cartItem, extras: [...cartItem.extras, extra] })
        } else {
            setCartItem({
                ...cartItem,
                extras: cartItem.extras.filter((e) => e.type !== extra.type),
            })
        }
    }

    useEffect(() => {
        const { fries, extras, drink, totalAmount } = cartItem
        let extrasCost = extras.reduce((acc, extra) => acc + extra.cost, 0)
        setCartItem({
            ...cartItem,
            unitaryPrice: product.price + fries.cost + extrasCost + (product.multipleDrinks ? drink.cost : 0),
            totalPrice: product.multipleDrinks
                ? (product.price + fries.cost + extrasCost + drink.cost) * totalAmount
                : (product.price + fries.cost + extrasCost) * totalAmount + drink.cost,
        })
    }, [cartItem.fries, cartItem.extras, cartItem.drink])

    const amount = (operation) => {
        const { totalAmount, unitaryPrice } = cartItem
        if (operation === 'sum') {
            if (totalAmount < product.stock) {
                setCartItem({
                    ...cartItem,
                    totalAmount: totalAmount + 1,
                    totalPrice: unitaryPrice * (totalAmount + 1),
                })
            } else {
                alert('ha llegado al límite de este producto')
            }
        } else {
            if (totalAmount > 1) {
                setCartItem({
                    ...cartItem,
                    totalAmount: totalAmount - 1,
                    totalPrice: unitaryPrice * (totalAmount - 1),
                })
            }
        }
    }

    const addToCart = () => {
        console.log(cartItem)
    }

    return (
        <View style={styles.card}>
            <Back
                name='arrow-bold-left'
                size={30}
                color='black'
                style={styles.back}
                onPress={() => props.navigation.navigate('Menu')}
            />
            <View style={styles.cardTitle}>
                <Text style={styles.h1}>{chosen.name}</Text>
            </View>
            <View style={styles.image}>
                <ImageBackground source={{ uri: `https://quickly-food.herokuapp.com${chosen.img}` }} style={styles.img}>
                </ImageBackground>
            </View>
            <View style={styles.description}>
                <Text style={styles.h3}>Descripción:</Text>
                <Text style={styles.text}>{chosen.description}</Text>
            </View>
            <View style={styles.choices}>
                {chosen.fries && <View style={styles.column_1}>
                    <Text style={styles.h3}>Tamaño Papas:</Text>
                    <View>
                        {friesSizes.map((option, index) => (
                            <View key={index} style={styles.option}>
                                <RadioButton
                                    color="#fe6849"
                                    value={option.size}
                                    status={cartItem.fries.size === option.size ? 'checked' : 'unchecked'}
                                    onPress={() => setCartItem({ ...cartItem, fries: option })}
                                />
                                <Text style={styles.text}>{option.size} {option.cost !== 0 && `$${option.cost}`}</Text>
                            </View>
                        ))}
                    </View>
                </View>}

                <View style={(product.fries || product.extras) ? styles.column_2 : styles.no_column}>
                    <Text style={styles.h3}>Gaseosa:</Text>
                    <View>
                        {drinkChoices.map((option, index) => (
                            <View key={index} style={styles.option}>
                                <RadioButton
                                    color="#fe6849"
                                    value={option.type}
                                    status={cartItem.drink.type === option.type ? 'checked' : 'unchecked'}
                                    onPress={() => setCartItem({ ...cartItem, drink: option })}
                                />
                                <Text style={styles.text}>{option.type} {option.cost !== 0 && `$${option.cost}`}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {product.extras && <View style={styles.column_1}>
                    <Text style={styles.h3}>Extras:</Text>
                    <View>
                        {extrasChoices.map((option, index) => (
                            <View key={index} style={styles.option}>
                                <Checkbox
                                    color="#fe6849"
                                    value={option.type}
                                    status={cartItem.extras.find(o => o.type === option.type) ? 'checked' : 'unchecked'}
                                    onPress={() => addExtras(option, !cartItem.extras.find(o => o.type === option.type) ? 'checked' : 'unchecked')}
                                />
                                <Text style={styles.text}>{option.type} {option.cost !== 0 && `$${option.cost}`}</Text>
                            </View>
                        ))}
                    </View>
                </View>}
                <TextInput
                    mode='outlined'
                    multiline={true}
                    numberOfLines={5}
                    label="Aclaraciones"
                    value={cartItem.clarifications}
                    onChangeText={clarifications => setCartItem({ ...cartItem, clarifications })}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.addToCart}>
                <View style={styles.order}>
                    <View style={styles.amount}>
                        <Text style={styles.text}
                            onPress={() => amount('res')}>
                            -
                        </Text>
                        <Text style={styles.text}>{cartItem.totalAmount}</Text>
                        <Text style={styles.text}
                            onPress={() => amount('sum')}>
                            +
                        </Text>
                    </View>
                    {/* <Text style={styles.text}
                        onPress={addToCart}>
                            {edit ? "Guardar edición" : "Agregar a mi orden"}
                        </Text> */}
                </View>
                <View style={styles.order}>
                    <Text style={styles.text}>Unidad: ${cartItem.unitaryPrice}</Text>
                    <Text style={styles.text}>Total: ${cartItem.totalPrice}</Text>
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(Product)

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    back: {
        alignSelf: "flex-start"
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#fe6849'
    },
    image: {
        width: "90%",
        height: "30%"
    },
    img: {
        width: "100%",
        height: "100%"
    },
    description: {
        width: "90%",
    },
    h3: {
        fontSize: 20,
        fontWeight: "700",
        color: '#fe6849',
        textAlign: "left"
    },
    text: {
        fontSize: 16,
        textAlign: "justify"
    },
    choices: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    column_1: {
        width: "40%"
    },
    column_2: {
        width: "55%"
    },
    no_column: {
        width: "90%",
        display: "flex",
        alignItems: "center"
    },
    option: {
        display: "flex",
        flexDirection: "row"
    },
    textInput: {
        width: "55%"
    },
    addToCart: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    order: {
        width: "50%",
        display: "flex",
        alignItems: "center"
    },
    amount: {
        width: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})