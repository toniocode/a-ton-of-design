import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search() {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput 
                    placeholder="Search Juice Name"
                    style={styles.searchTextInput}
                />
                <MaterialIcons name='search' size={25} color={'#DF898D'} />
            </View>
            <View style={styles.moreOptionsContainer}>
                <MaterialIcons name='more-vert' size={25} />
            </View>
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
        justifyContent: 'space-between'
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