import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, ImageBackground } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import orderActions from '../redux/actions/orderActions'
const HistoryProfile = ({userData, orders, getOrders}) => {
    // useEffect(() => {
    //     const getOrdersById = async () => {
    //         try{    
    //             let response = await getOrders(userData)
    //             console.log(response)
    //         }catch(e){
    //             console.log(e)
    //         }
            
    //     }
    //     getOrdersById()
    // },[])
 
    return (
        <ScrollView style={styles.containerAll}>
            <View style={styles.containerCard}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Estado de pedido</Text>
                </View>
                <View style={styles.containerCardBody}>
                    <View style={styles.containerImage}>
                        <ImageBackground source={{uri: "https://i.postimg.cc/yxFkk4g3/moto.png"}} resizeMode="cover" style={styles.imageCard}> 
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Estado: </Text>
                            <Text>Cancelado</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>N°: </Text>
                            <Text>61684ee5d985aa2a04379900_ord0</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Precio: </Text>
                            <Text>$ 1.350,00</Text>
                        </View>                        
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Punto de entrega: </Text>
                            <Text>carlos 12 juan</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Hora estimada: </Text>
                            <Text>16:14</Text>
                        </View>      
                    </View>
                </View>
            </View> 
            <View style={styles.containerCard}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Estado de pedido</Text>
                </View>
                <View style={styles.containerCardBody}>
                    <View style={styles.containerImage}>
                        <ImageBackground source={{uri: "https://i.postimg.cc/yxFkk4g3/moto.png"}} resizeMode="cover" style={styles.imageCard}> 
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Estado: </Text>
                            <Text>Cancelado</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>N°: </Text>
                            <Text>61684ee5d985aa2a04379900_ord0</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Precio: </Text>
                            <Text>$ 1.350,00</Text>
                        </View>                        
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Punto de entrega: </Text>
                            <Text>carlos 12 juan</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Hora estimada: </Text>
                            <Text>16:14</Text>
                        </View>      
                    </View>
                </View>
            </View>    
            <View style={styles.containerCard}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Estado de pedido</Text>
                </View>
                <View style={styles.containerCardBody}>
                    <View style={styles.containerImage}>
                        <ImageBackground source={{uri: "https://i.postimg.cc/yxFkk4g3/moto.png"}} resizeMode="cover" style={styles.imageCard}> 
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Estado: </Text>
                            <Text>Cancelado</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>N°: </Text>
                            <Text>61684ee5d985aa2a04379900_ord0</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Precio: </Text>
                            <Text>$ 1.350,00</Text>
                        </View>                        
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Punto de entrega: </Text>
                            <Text>carlos 12 juan</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Hora estimada: </Text>
                            <Text>16:14</Text>
                        </View>      
                    </View>
                </View>
            </View>    
            <View style={styles.containerCard}>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Estado de pedido</Text>
                </View>
                <View style={styles.containerCardBody}>
                    <View style={styles.containerImage}>
                        <ImageBackground source={{uri: "https://i.postimg.cc/yxFkk4g3/moto.png"}} resizeMode="cover" style={styles.imageCard}> 
                        </ImageBackground>
                    </View>
                    <View>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Estado: </Text>
                            <Text>Cancelado</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>N°: </Text>
                            <Text>61684ee5d985aa2a04379900_ord0</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Precio: </Text>
                            <Text>$ 1.350,00</Text>
                        </View>                        
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Punto de entrega: </Text>
                            <Text>carlos 12 juan</Text>
                        </View>                       
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Hora estimada: </Text>
                            <Text>16:14</Text>
                        </View>      
                    </View>
                </View>
            </View>       
        </ScrollView>
    )
}

const mapDispachToProps = {
    getOrders : orderActions.getUserOders
}
const mapStateToProps = state => {
    return{
        orders: state.orders.orders,
    }
}
         
export default connect(mapStateToProps, mapDispachToProps)(HistoryProfile)

const styles = StyleSheet.create({
    containerAll: {
        width:"100%",
        marginBottom: 20,
        minHeight: 200,
        padding: 10,
        backgroundColor: 'rgba(200, 200, 200, 0.1)',
    },
    title:{
        width: "100%",
        padding: 5,
        textAlign: "center",
        color: "#fe6849",
        fontWeight: "bold",
        fontSize: 20,
    },
    containerCard:{
        width: "100%",
        height: 200,
        backgroundColor: 'rgba(252, 252, 252, 1)',
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0.2,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 15,
        
    },
    containerCardBody:{
        width: "98%",
        height: "78%",
        borderColor: 'rgba(0, 0, 0, 0.4)',
        borderWidth: 0.2,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    containerImage:{
        width: "22%",
        height: "70%",
        marginRight: 8,
    },
    imageCard:{
        height: "100%",
        width: "100%",
    },
    containerText:{
        flexDirection: "row"
    },
    text:{
     color: "#fe6849",
     fontWeight: "bold"
    }
})