import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TextArea } from 'react-native'

const Contact = () => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder='Nombre'
        placeholderTextColor='#333333'
        style={styles.input}
        //   onChangeText={(e) => input(e, "")}
      />
      <TextInput placeholder='numero alternativo' placeholderTextColor='#333333' style={styles.input} />
      {/* <TextInput
        placeholder="consulta"
        placeholderTextColor="#333333"
        style={styles.input}
      /> */}
      <TextInput
        multiline={true}
        numberOfLines={10}
        placeholderTextColor='#333333'
        placeholder='Escribe tu consulta'
        style={{
          height: 200,
          textAlignVertical: 'top',
          borderWidth: 1,
          width: 300,
          borderRadius: 6,
          marginBottom: 10,
          color: '#000',
          fontSize: 20,
          paddingLeft: 15,
        }}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={{ color: '#fff' }}> Enviar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerInput: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#FE6849',
    width: '35%',
    borderRadius: 20,
    padding: 15,
  },

  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.50)',
    width: 300,
    borderRadius: 6,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 6,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 1,
  },
})

export default Contact
