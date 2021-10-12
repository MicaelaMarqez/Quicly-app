import React from 'react-native'
import { View, Text, StyleSheet, Touchable, Image } from 'react'

const buyConfirmation = () => {
    return (
        <View>
  <Text>Gracias por tu compra!</Text>
        <Text>pronto recibiras un mail con la confirmación y detalle de compra</Text>

        {/* <Image
         source="https://i.postimg.cc/jS5GRBWn/confirmation.png"
        /> */}
        <Touchable>
          <Text>volver a Home</Text>
        </Touchable>
        </View>
    )
}


export default buyConfirmation

// const styles = StyleSheet.create({

// })