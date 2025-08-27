import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Pressable, StyleSheet, TextInput, View } from "react-native";

export default function Search() {
    const profileName = 'Jenny';
    const filterScale = useRef(new Animated.Value(1)).current;

    const onPressInButton = () => {
        Animated.spring(filterScale, {
            toValue: 0.80,
            useNativeDriver: true
        }).start();
    }

    const onPressOutButton = () => {
        Animated.spring(filterScale, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <MaterialIcons name='search' size={25} color={'#DF898D'} />
                <TextInput
                    placeholder="Search any recipe"
                    style={styles.searchTextInput}
                />
            </View>
            <Animated.View style={{ transform: [{ scale: filterScale }]}}>
                <Pressable 
                    style={styles.moreOptionsContainer}
                    onPressIn={onPressInButton}
                    onPressOut={onPressOutButton}
                >
                    <MaterialIcons name='filter-list' size={25} />
                </Pressable>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        gap: 20
    },
    searchContainer: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderRadius: 10,
        gap: 5
    },
    searchTextInput: {
        fontSize: 15,
        color: '#DE888C'
    },
    moreOptionsContainer: {
        padding: 10,
        backgroundColor: '#F7D3D9',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})