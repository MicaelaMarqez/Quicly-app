import { FlatList, useScreenReaderEnabled } from 'native-base'
import React from 'react'
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { flexDirection } from 'styled-system'
import CartItem from '../components/CartItem'

const Cart = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cartTitle}>
        <ImageBackground
          style={styles.image}
          source={{ uri: 'https://i.postimg.cc/kGq3vvTZ/hambur.gif' }}
        ></ImageBackground>
        <Text style={styles.title}>Resumen de mi pedido</Text>
      </View>
      <View style={styles.productsContainer}>
        <FlatList
          data={props?.cart}
          keyExtractor={(item) => item._id}
          renderItem={({ item, index }) => {
            return <CartItem cartItem={item} index={index} />
          }}
        />
      </View>
      <View style={styles.resumen}>
        {!props?.cart?.length ? (
          <Text style={{ ...styles.totalPrice, color: 'gray', marginTop: 50 }}>
            No has agregado ningún producto al carrito
          </Text>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => props.navigation.push('checkout', { bool: true })}
              style={styles.button}
            >
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20 }}> Pagar</Text>
            </TouchableOpacity>
            <Text style={styles.totalPrice}>
              Total: $ {props?.cart?.reduce((acc, item) => acc + item.totalPrice, 0)}
            </Text>
          </>
        )}
      </View>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    cart: state.users.cart,
  }
}

export default connect(mapStateToProps)(Cart)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    marginVertical: 30,
    fontSize: 24,
    color: '#fe6849',
    fontWeight: '700',
    textAlign: 'center',
  },
  productsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  resumen: {
    width: '70%',
    height: 120,
    fontSize: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#fe6849',
    width: '35%',
    borderRadius: 10,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 5,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  cartTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'tomato',
  },
})
