import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native'
import { connect } from 'react-redux'
import productActions from '../redux/actions/productActions'
import CategorySection from '../components/CategorySection'
import Preloader from '../components/Preloader'
import { NativeBaseProvider, Button } from 'native-base'
import CategoryList from '../components/CategoryList'
import FloatingButton from './FloatingButton'
import { Feather } from '@expo/vector-icons'
import { flex, marginBottom, width } from 'styled-system'

const Menu = (props) => {
  const [loader, setLoader] = useState(true)
  const [filteredView, setFilteredView] = useState(false)
  const [selected, setSelected] = useState('')

  const categories = []
  props.products.map((product) => {
    if (!categories.includes(product.category)) {
      return categories.push(product.category)
    }
  })

  const getProducts = async () => {
    try {
      await props.getProducts()
      setLoader(false)
    } catch (error) {}
  }

  useEffect(() => {
    getProducts()
    props?.route?.params?.filterBy && setSelected(props?.route?.params?.filterBy)
  }, [])

  if (loader) {
    return <Preloader message='Cargando...' />
  }
  const getFiltered = (word) => {
    if (word.length) {
      setFilteredView(true)
      props.getFiltered(word)
    } else {
      setFilteredView(false)
    }
  }

  const picture = {
    Hamburguesas: 'https://i.postimg.cc/pr9w1gTY/hamburguesas.webp',
    Empanadas: 'https://i.postimg.cc/nzBkHLsx/empanadas-1.webp',
    Pizzas: 'https://i.postimg.cc/13zjWkjg/pizza.webp',
    Lomos: 'https://i.postimg.cc/wMXPnc8Y/sandwich.webp',
    Ensaladas: 'https://i.postimg.cc/bwNTtmYC/saludable-1.webp',
    Milanesas: 'https://i.postimg.cc/m2mGW6PB/milanesas-de-ternera.jpg',
    Pastas: 'https://i.postimg.cc/59GwKf3V/receta-de-pasta-a-la-napolitana-un-clasico-italiano-facil-de-preparar-2.jpg',
    Postres: 'https://i.postimg.cc/ZnpYbPy4/2020-05-26-T17-38-55-mrs-Image-Recipes-138750lrg.jpg',
    todos: 'https://i.postimg.cc/sgBKb4RQ/fast-food.webp',
  }

  return (
    <NativeBaseProvider>
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.image} source={{ uri: 'https://i.postimg.cc/DwvFPSkY/comida.gif' }}>
          <ImageBackground style={styles.logo} source={{ uri: 'https://i.postimg.cc/zv3pNmMr/loguito-2.png' }}></ImageBackground>
          <View style={styles.cart}>
            <TextInput placeholder='??Qu?? quieres pedir?' style={styles.searcher} onChange={(e) => getFiltered(e.nativeEvent.text)} />
            <TouchableOpacity onPress={() => props.navigation.push('cart', { bool: true })}>
              <Feather name='shopping-cart' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.categoriesCards}>
          {categories.map((category) => {
            return (
              <TouchableOpacity style={styles.categoryCard} key={category} onPress={() => setSelected(category)}>
                <Image style={styles.categoryPic} source={{ uri: picture[category] }} />
                <Text>{category}</Text>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity style={styles.categoryCard} onPress={() => setSelected('')}>
            <Image style={styles.categoryPic} source={{ uri: picture.todos }} />
            <Text>Ver Todos</Text>
          </TouchableOpacity>
        </View>
        {filteredView ? (
          !props.filtered.length ? (
            <ScrollView style={styles.message}>
              <Text style={styles.messageTitle}>Sin resultados</Text>
              <Text style={styles.messageSubTitle}>Intente con otro t??rmino</Text>
            </ScrollView>
          ) : (
            props.filtered.map((product) => <CategoryList product={product} key={product._id} route={props.route} />)
          )
        ) : (
          categories
            .filter((category) => category.includes(selected))
            .map((category) => {
              let products = props.products.filter((product) => product.category === category)
              return <CategorySection route={props.route} navigation={props.navigation} products={products} key={category} category={category} />
            })
        )}
      </ScrollView>
    </NativeBaseProvider>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    products: state.products.products,
    filtered: state.products.filtered,
  }
}
const mapDispatchToProps = {
  getProducts: productActions.getProducts,
  getFiltered: productActions.getFilteredList,
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenedor: {
    width: '90%',
  },
  cart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '10%',
    width: '88%',
  },
  searcher: {
    width: '75%',
    height: 40,
    padding: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#fe6849',
    alignSelf: 'center',
    borderStyle: 'solid',
    color: '#444',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: '50%',
    height: 25,
    justifyContent: 'flex-end',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginLeft: '10%',
  },
  message: {
    alignItems: 'center',
    marginTop: 20,
  },
  messageTitle: {
    fontWeight: '700',
    fontSize: 17,
    textAlign: 'center',
  },
  messageSubTitle: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  categoriesCards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 22,
    marginBottom: 60,
  },
  categoryCard: {
    width: '30%',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 5,
    shadowRadius: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryPic: {
    width: '50%',
    height: '50%',
    padding: '2%',
  },
})
