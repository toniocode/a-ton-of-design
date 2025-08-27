import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native"
import IndexHeader from "./components/indexHeader"
import Search from "./components/search"

export default function D3() {


    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <IndexHeader />
                    <Search />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    safeArea: {
        backgroundColor: '#F4612D',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    scrollView: {
    },
    header: {
        paddingTop: 0,
        padding: 20,
        gap: 20,
    }
})