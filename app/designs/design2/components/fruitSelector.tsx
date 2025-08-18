import { useRef } from "react";
import { Animated, Pressable, StyleSheet, Text, View } from "react-native";

export default function FruitSelector() {
    const fruits = [
        {
            name: 'Avocado', icon: '🥑'
        },
        {
            name: 'Mango', icon: '🥭'
        },
        {
            name: 'Apple', icon: '🍎'
        },
        {
            name: 'Grapes', icon: '🍇'
        },
        {
            name: 'Banana', icon: '🍌'
        },
    ]

    return (
        <View
            style={styles.scrollView}
        >
            {
                fruits.map((fruit, index) => {
                    const scale = useRef(new Animated.Value(1)).current;

                    const onPressInButton = () => {
                        Animated.spring(scale, {
                            toValue: 0.80,
                            useNativeDriver: true
                        }).start();
                    }

                    const onPressOutButton = () => {
                        Animated.spring(scale, {
                            toValue: 1,
                            friction: 3,
                            tension: 40,
                            useNativeDriver: true
                        }).start();
                    }

                    return (
                        <Animated.View
                            key={index}
                            style={{ transform: [{ scale }] }}
                        >
                            <Pressable
                                onPressIn={onPressInButton}
                                onPressOut={onPressOutButton}
                                style={styles.button}
                            >
                                <Text style={styles.fruitIcon}>{fruit.icon}</Text>
                                <Text style={styles.fruitTitle}>{fruit.name}</Text>
                            </Pressable>
                        </Animated.View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    button: {
        alignItems: 'center',
        gap: 10,
    },
    fruitIcon: {
        padding: 15,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    fruitTitle: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold'
    }
})