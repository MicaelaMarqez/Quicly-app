import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, StatusBar, Platform, Dimensions, ImageBackground, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const CategoryCarousel = (props) => {
    const [slide, setSlide] = useState(0)
    const sliderWidth = Dimensions.get('screen').width - 30
    const _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide} key={index}>
                <ImageBackground source={{ uri: `https://quickly-food.herokuapp.com${item.img}` }} style={styles.background}>
                </ImageBackground>
                <View style={styles.infoContainer}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text>${item.price}</Text>
                    <Text>{item.ingredients}</Text>
                </View>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <Carousel
                layout={'default'}
                data={props.products}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                autoplay={true}
                enableMomentum={false}
                onBeforeSnapToItem={(index) => setSlide(index)}
                // lockScrollWhileSnapping={true}
                loop={true}
                activeAnimationType={'spring'}
            />
            <Pagination
                dotsLength={props.products.length}
                activeDotIndex={slide}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 5,
                    backgroundColor: '#df5e5e'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    )
}

export default CategoryCarousel

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 15
    },
    slide: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#444',
        borderWidth: 1
    },
    background: {
        width: 120,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'center',
        overflow: 'hidden'
    },
    infoContainer: {
        height: 120,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    productName: {
        width: '100%',
        color: 'white',
        backgroundColor: '#000000a1',
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
    }
})