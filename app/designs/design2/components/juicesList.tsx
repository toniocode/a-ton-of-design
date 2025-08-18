import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function JuicesList() {
    const juices = [
        {
            id: '1',
            name: 'Mango Juice',
            shortDescription: 'Freshly pressed apple juice, crisp and naturally sweet.',
            largeDescription: 'Made from ripe, hand-picked apples, this juice delivers a refreshing balance of sweetness and tartness. Perfect for a healthy start to your day or a naturally energizing snack.',
            imageName: require('@/assets/images/mango-juice.png'),
            bgColor: '#E89297',
            price: 12.65
        },
        {
            id: '2',
            name: 'Pineapple Juice',
            shortDescription: 'Sweet and tangy pineapple juice bursting with tropical flavor',
            largeDescription: 'Extracted from sun-ripened pineapples, this vibrant juice offers a tropical punch with a perfect balance of sweetness and acidity. Ideal for hydration, cocktails, or a refreshing treat any time.',
            imageName: require('@/assets/images/pineapple-juice.png'),
            bgColor: '#F0CDE1',
            price: 13.99
        },
        {
            id: '3',
            name: 'Grapes Juice',
            shortDescription: 'Sweet, fragrant strawberry juice full of berry goodness.',
            largeDescription: 'Crafted from juicy, ripe strawberries, this juice is naturally sweet, fragrant, and packed with antioxidants. Its rich flavor makes it a deliciously refreshing choice for breakfast, smoothies, or a cool summer drink.',
            imageName: require('@/assets/images/grapes-juice.png'),
            bgColor: '#EAD1EC',
            price: 11.27
        }
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
            {
                juices.map((juice, index) => {
                    const [quantity, setQuantity] = useState(0);

                    const addQuantity = () => {
                        setQuantity(quantity + 1);
                    }

                    const removeQuantity = () => {
                        if (quantity > 0) {
                            setQuantity(quantity - 1);
                        }
                    }

                    return (
                        // 

                        <View key={index} style={styles.juiceContainer}>
                            <View style={styles.juiceContent}>
                                <Text style={styles.juiceName}>{juice.name}</Text>
                                <Text style={styles.juiceShortDescription}>{juice.shortDescription}</Text>
                                <View style={styles.juicePriceAndQuantityContainer}>
                                    <Text style={styles.juicePrice}>{juice.price}</Text>
                                    <View style={[styles.quantityContainer, { backgroundColor: juice.bgColor }]}>
                                        <Pressable onPress={removeQuantity}>
                                            <MaterialIcons name='remove' size={25} color={'#fff'} />
                                        </Pressable>
                                        <Text style={{ color: '#fff' }}>{quantity}</Text>
                                        <Pressable onPress={addQuantity} >
                                            <MaterialIcons name='add' size={25} color={'#fff'}/>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.juiceImageContainer, { backgroundColor: juice.bgColor}]}>
                                <Link href={`/designs/design2/juice/${juice.id}`}>
                                    <Image source={juice.imageName} style={styles.juiceImg} />
                                </Link>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        gap: 20,
        paddingHorizontal: 20,
        marginTop: 10
    },
    juiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    juiceContent: {
        flex: 1,
        gap: 10
    },
    juiceName: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    juiceShortDescription: {
    },
    juicePriceAndQuantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    juicePrice: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        gap: 10
    },
    juiceImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        borderRadius: 20
    },
    juiceImg: {
        width: 100,
        height: 100,
    }
})