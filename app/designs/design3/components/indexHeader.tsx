import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";

export default function IndexHeader() {
    const profileName = 'Jenny';
    const bellScale = useRef(new Animated.Value(1)).current;

    const onPressInButton = () => {
        Animated.spring(bellScale, {
            toValue: 0.80,
            useNativeDriver: true
        }).start();
    }

    const onPressOutButton = () => {
        Animated.spring(bellScale, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true
        }).start();
    }

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Image
                    source={require('@/assets/images/profiles/profile2.png')}
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%'
                    }}
                />
                <View style={{
                    gap: 10
                }}>
                    <Text style={{ color: '#fff' }}>Hello, {profileName}!</Text>
                    <Text style={{ color: '#fff' }}>Check amazing recipes.</Text>
                </View>
            </View>
            <Animated.View style={{
                transform: [{ scale: bellScale }]
            }}>
                <Pressable
                    style={{
                        padding: 10,
                        backgroundColor: '#fff',
                        borderRadius: '50%'
                    }}
                    onPressIn={onPressInButton}
                    onPressOut={onPressOutButton}
                >
                    <MaterialCommunityIcons name='bell-badge-outline' size={25} />
                </Pressable>
            </Animated.View>
        </View>
    )
}