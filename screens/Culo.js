import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Culo = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Gracias</Text>
        <Text style={styles.subtitle}> por tu compra!</Text>
        <Text style={styles.text}>
          pronto recibiras un mail con la confirmación y detalle de compra
        </Text>

        <Image source={require('../assets/confirmation.png')} style={styles.imagen} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textHome}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Culo

const styles = StyleSheet.create({})
