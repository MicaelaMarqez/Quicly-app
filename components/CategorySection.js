import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ProductCard from './ProductCard'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CategoryCarousel from './CategoryCarousel';

const CategorySection = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.category}</Text>
            <CategoryCarousel products={props.products} />
        </View>
    )
}

export default CategorySection

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        marginBottom: 20,
        marginHorizontal: 'auto',

    },
    title: {
        width: '100%',
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 15,
        fontWeight: "700",
        color: "#fe6849",
    }
})