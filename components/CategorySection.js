import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import ProductCard from './ProductCard'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CategoryCarousel from './CategoryCarousel';
import CategoryList from './CategoryList';

const CategorySection = (props) => {
    const [view, setView] = useState(true)
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>{props.category}</Text>
                <Text onPress={() => setView(!view)}>Ver todo</Text>
            </View>
            {view
                ? <CategoryCarousel products={props.products} />
                : <CategoryList products={props.products} />
            }
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