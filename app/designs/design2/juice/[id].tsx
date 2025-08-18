import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function JuiceDetails() {
    const juices = [
        {
            id: '1',
            name: 'Apple Juice',
            shortDescription: 'Freshly pressed apple juice, crisp and naturally sweet.',
            largeDescription: 'Made from ripe, hand-picked apples, this juice delivers a refreshing balance of sweetness and tartness. Perfect for a healthy start to your day or a naturally energizing snack.',
            imageName: 'apple-juice.png',
            price: 12.65
        },
        {
            id: '2',
            name: 'Pineapple Juice',
            shortDescription: 'Sweet and tangy pineapple juice bursting with tropical flavor',
            largeDescription: 'Extracted from sun-ripened pineapples, this vibrant juice offers a tropical punch with a perfect balance of sweetness and acidity. Ideal for hydration, cocktails, or a refreshing treat any time.',
            imageName: 'pineapple-juice.png',
            price: 13.99
        },
        {
            id: '3',
            name: 'Grapes Juice',
            shortDescription: 'Sweet, fragrant strawberry juice full of berry goodness.',
            largeDescription: 'Crafted from juicy, ripe strawberries, this juice is naturally sweet, fragrant, and packed with antioxidants. Its rich flavor makes it a deliciously refreshing choice for breakfast, smoothies, or a cool summer drink.',
            imageName: 'grapes-juice.png',
            price: 11.27
        }
    ];

    const { id } = useLocalSearchParams();
    const juice = juices.find(juice => juice.id === id);

    return (
        <View style={{ paddingTop: 100 }}>
            <Text>{juice?.name}</Text>
        </View>
    )
}