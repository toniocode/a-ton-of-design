import { Image, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import Search from "./components/search";
import FruitSelector from "./components/fruitSelector";
import JuicesList from "./components/juicesList";

export default function D2S1() {

    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Search />
                    <FruitSelector />
                </View>

            </SafeAreaView>

            <JuicesList />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    safeArea: {
        backgroundColor: '#DE888C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    scrollView: {
    },
    header: {
        padding: 20,
        gap: 20,
    }
})