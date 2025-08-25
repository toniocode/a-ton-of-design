import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function JuiceDetails() {
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
        },
        {
            id: '4',
            name: 'Mango Juice',
            shortDescription: 'Freshly pressed apple juice, crisp and naturally sweet.',
            largeDescription: 'Made from ripe, hand-picked apples, this juice delivers a refreshing balance of sweetness and tartness. Perfect for a healthy start to your day or a naturally energizing snack.',
            imageName: require('@/assets/images/mango-juice.png'),
            bgColor: '#E89297',
            price: 12.65
        },
    ];

    const { id } = useLocalSearchParams();
    const juice = juices.find(juice => juice.id === id);
    const [isFav, setIsFav] = useState(false);
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
        <View style={{ pointerEvents: 'box-none' }} pointerEvents="box-none">
            <SafeAreaView style={{ backgroundColor: juice?.bgColor, borderRadius: 30 }} pointerEvents="box-none">
                <View style={styles.headerActions}>
                    <Link href={'/designs/design2/d2s1'} style={{ backgroundColor: '#F7D4D9', borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                        <MaterialIcons name='arrow-back-ios-new' size={25} color={'#fff'} />
                    </Link>
                    <Pressable>
                        <MaterialIcons name='more-vert' size={25} color={'#fff'} />
                    </Pressable>
                </View>
                <View style={styles.imageContainer}>
                    <Image source={juice?.imageName} style={styles.img} />
                </View>
                {
                    isFav
                        ? (
                            <Pressable style={styles.favButton} onPress={() => { setIsFav(false) }} hitSlop={{ bottom: 250 }}>
                                <Text><MaterialCommunityIcons name='heart' size={25} color={'red'} /></Text>
                            </Pressable>
                        )
                        : (
                            <Pressable style={styles.favButton} onPress={() => { setIsFav(true) }}>
                                <Text><MaterialCommunityIcons name='heart-outline' size={25} color={'red'} /></Text>
                            </Pressable>
                        )
                }
            </SafeAreaView>
            <SafeAreaView style={{ marginTop: 30 }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{juice?.name}</Text>

                    <View style={{
                        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{juice?.price}</Text>
                        <View style={[styles.quantityContainer, { backgroundColor: juice?.bgColor }]}>
                            <Pressable onPress={removeQuantity}>
                                <MaterialIcons name='remove' size={25} color={'#fff'} />
                            </Pressable>
                            <Text style={{ color: '#fff' }}>{quantity}</Text>
                            <Pressable onPress={addQuantity} >
                                <MaterialIcons name='add' size={25} color={'#fff'} />
                            </Pressable>
                        </View>
                    </View>

                    <View style={{
                        marginTop: 50
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>About this product</Text>
                        <Text style={{ fontSize: 16, textAlign: 'justify' }}>{juice?.largeDescription}</Text>
                    </View>

                    <Pressable style={{ backgroundColor: juice?.bgColor, alignSelf: 'center', paddingVertical: 10, width: Dimensions.get('window').width * 0.80, borderRadius: 10, marginTop: 50 }}>
                        <Text style={{
                            fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'white'
                        }}>Add to bag</Text>
                    </Pressable>
                </View>


            </SafeAreaView>

        </View>
    )
}

const styles = StyleSheet.create({
    headerActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    img: {
        width: 350,
        height: 350
    },
    favButton: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        position: 'absolute',
        right: 25,
        bottom: -20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        zIndex: 99999
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        gap: 10
    },
})