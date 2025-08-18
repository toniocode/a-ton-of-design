import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

export default function D1S1() {
    const items = [
        {
            name: 'Ride',
            image: require('../../../assets/images/ride.png')
        },
        {
            name: 'Delivery',
            image: require('../../../assets/images/delivery.png')
        },
        {
            name: 'Food',
            image: require('../../../assets/images/food.png')
        },
        {
            name: 'Travel',
            image: require('../../../assets/images/travel.png')
        },
    ]

    const routes = [
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        },
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        },
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        },
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        },
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        },
        {
            name: "Zaporiz'ke Hwy 40",
            address: "Dnipko, Dnipropetrovs'ka oblost"
        }
    ]

    return (
        <>
            <SafeAreaView
                style={{
                    backgroundColor: '#FFA96E',
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                }}
            >
                <View style={{
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: 10,
                    flexDirection: 'row',
                    backgroundColor: '#FFA96E',
                    rowGap: 10,
                    borderRadius: 25
                }}>
                    {
                        items.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        backgroundColor: '#1E1E1E',
                                        width: '49%',
                                        borderRadius: 25,
                                        padding: 20
                                    }}
                                >
                                    <Image
                                        source={item.image}
                                        style={{
                                            width: 150,
                                            height: 150,
                                            objectFit: 'contain',
                                            alignSelf: 'center'
                                        }}
                                    />
                                    <Text
                                        style={{
                                            color: '#ffffff',
                                            fontSize: 24,
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </SafeAreaView>

            <View
                style={{
                    backgroundColor: '#1E1E1E',
                    position: 'relative',
                    top: -20,
                    zIndex: -1,
                    paddingTop: 30,
                    paddingHorizontal: 10,
                    flex: 1
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 5,
                    borderWidth: 1,
                    borderColor: '#ffffff',
                    width: '100%',
                    borderRadius: 20,
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                        gap: 10
                    }}>
                        <MaterialIcons name="search" size={25} color={'#ffffff'} />
                        <TextInput
                            placeholder="Where to?"
                            placeholderTextColor={'#ffffff'}
                            style={{
                                fontSize: 22
                            }}
                        />
                    </View>
                    <Pressable style={{
                        backgroundColor: '#ffffff',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        gap: 5,
                        borderRadius: 15
                    }}>
                        <MaterialIcons name="alarm" size={25} />
                        <Text style={{
                            fontSize: 20
                        }}>Now</Text>
                        <MaterialIcons name='arrow-drop-down' size={25} />
                    </Pressable>
                </View>

                <View
                    style={{
                        marginTop: 10
                    }}
                >
                    {
                        routes.map((route, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: 10,
                                        justifyContent: 'space-between',
                                        borderBottomColor: 'gray',
                                        borderBottomWidth: 1
                                    }}
                                >
                                    <View>
                                        <Text style={{ color: '#ffffff', fontSize: 18 }}>{route.name}</Text>
                                        <Text style={{ color: '#d2d2d2' }}>{route.address}</Text>
                                    </View>
                                    <MaterialIcons name='alarm' size={25} color={'#ffffff'} />
                                </View>
                            )
                        })
                    }
                </View>
            </View>


        </>

    )
}