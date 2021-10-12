import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import HistoryProfile from '../components/HistoryProfile'
// import HelpProfile from "../components/HelpProfile"
import Contact from '../components/Contact'
import PaymentProfile from '../components/PaymentProfile'
import DataProfile from '../components/DataProfile'

const Profile = (props) => {
  const [changeComponent, setChangeComponent] = useState(<DataProfile />)
  console.log(props)
  if (changeComponent === 'data') {
    setChangeComponent(<DataProfile />)
  } else if (changeComponent === 'help') {
    setChangeComponent(<Contact />)
  } else if (changeComponent === 'history') {
    setChangeComponent(<HistoryProfile />)
  } else if (changeComponent === 'payment') {
    setChangeComponent(<PaymentProfile />)
  }

  return (
    <ScrollView>
      <View style={styles.containerAllProfile}>
        <View style={styles.containerProfile}>
          <View style={styles.containerProfileName}>
            <Text style={styles.titleHi}>Hola</Text>
            <Text style={styles.profileName}>Juan Carlos</Text>
          </View>
          <View style={styles.containerProfileImage}>
            <ImageBackground
              style={styles.imageProfile}
              onPress={() => setChangeComponent('data')}
              resizeMode='cover'
              source={{
                uri: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/08/fotos-perfil-whatsapp_16.jpg?itok=fl2H3Opv',
              }}
            ></ImageBackground>
          </View>
        </View>
        <View style={styles.containAllBoxComponent}>
          <View style={styles.containBoxComponent}>
            <Pressable style={styles.boxComponent} onPress={() => setChangeComponent('data')}>
              <View style={styles.containerImageBox}>
                <ImageBackground
                  style={styles.imageBox}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.latercera.com/resizer/nq_sgXHp2LhgY71dV9CHtzoUvIo=/200x200/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg',
                  }}
                ></ImageBackground>
              </View>
              <View>
                <Text style={styles.textBox}>Datos</Text>
                <Text style={styles.textBox}>de perfil</Text>
              </View>
            </Pressable>
            <Pressable style={styles.boxComponent} onPress={() => setChangeComponent('help')}>
              <View style={styles.containerImageBox}>
                <ImageBackground
                  style={styles.imageBox}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.latercera.com/resizer/nq_sgXHp2LhgY71dV9CHtzoUvIo=/200x200/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg',
                  }}
                ></ImageBackground>
              </View>
              <View>
                <Text style={styles.textBox}>Centro</Text>
                <Text style={styles.textBox}>de ayuda</Text>
              </View>
            </Pressable>
            <Pressable style={styles.boxComponent} onPress={() => setChangeComponent('history')}>
              <View style={styles.containerImageBox}>
                <ImageBackground
                  style={styles.imageBox}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.latercera.com/resizer/nq_sgXHp2LhgY71dV9CHtzoUvIo=/200x200/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg',
                  }}
                ></ImageBackground>
              </View>
              <View>
                <Text style={styles.textBox}>Historial</Text>
                <Text style={styles.textBox}>de pedidos</Text>
              </View>
            </Pressable>
            <Pressable style={styles.boxComponent} onPress={() => setChangeComponent('payment')}>
              <View style={styles.containerImageBox}>
                <ImageBackground
                  style={styles.imageBox}
                  resizeMode='cover'
                  source={{
                    uri: 'https://www.latercera.com/resizer/nq_sgXHp2LhgY71dV9CHtzoUvIo=/200x200/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/Z2NK6DYAPBHO3BVPUE25LQ22ZA.jpg',
                  }}
                ></ImageBackground>
              </View>
              <View>
                <Text style={styles.textBox}>Métodos</Text>
                <Text style={styles.textBox}>de pago</Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={styles.containerBanner}>
          <Pressable style={styles.bannerContainer} onPress={() => props.navigation.navigate('Menu')}>
            <ImageBackground
              resizeMode='cover'
              style={styles.imageBanner}
              source={{ uri: 'https://i.postimg.cc/bYB6CVjF/burguer-Cris.png' }}
            >
              <Text style={styles.titleProduct}>Productos</Text>
            </ImageBackground>
          </Pressable>
        </View>
      </View>
      <View style={styles.containerComponent}>
        <View style={styles.componentContainer}>{changeComponent}</View>
      </View>
    </ScrollView>
  )
}

export default Profile

const styles = StyleSheet.create({
  containerAllProfile: {
    width: '100%',
    height: 550,
  },
  containerProfile: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
  },
  containerProfileName: {
    height: '100%',
    width: '60%',
    padding: 10,
  },
  containerProfileImage: {
    height: '100%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHi: {
    fontSize: 20,
    marginBottom: 5,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  containAllBoxComponent: {
    height: '25%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  containBoxComponent: {
    height: '95%',
    width: '95%',
    borderRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImageBox: {
    width: '50%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
  },
  boxComponent: {
    width: '22%',
    height: '75%',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBox: {
    height: '100%',
    width: '100%',
  },
  textBox: {
    textAlign: 'center',
    marginTop: 2,
  },
  imageProfile: {
    height: 140,
    width: 140,
    overflow: 'hidden',
    borderRadius: 150,
  },
  containerBanner: {
    width: '100%',
    height: '25%',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerContainer: {
    width: '95%',
    height: '100%',
    padding: 5,
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent: 'center',
  },
  titleProduct: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  containerComponent: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentContainer: {
    width: '95%',
    borderRadius: 15,
    backgroundColor: 'white',
  },
})
