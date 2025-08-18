import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function D1S3() {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#202020',
        }}>
            <SafeAreaView style={{
                backgroundColor: '#FFA96E',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10
                }}>
                    <View>
                        <Text style={{ fontSize: 25 }}>Hi there 👋🏼</Text>
                        <Text style={{ fontSize: 15 }}>Stanislav Kashchishen</Text>
                    </View>
                    <View>
                        <Image
                            source={require('@/assets/images/profile2.png')}
                            style={{
                                width: 60,
                                height: 60,
                                backgroundColor: '#fff',
                                objectFit: 'cover',
                                borderRadius: 10,
                            }}
                        />
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                    <Pressable style={{
                        width: '32%',
                        backgroundColor: '#202020',
                        paddingVertical: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        borderTopLeftRadius: 30,
                        borderBottomLeftRadius: 30
                    }}>
                        <MaterialIcons name='help-center' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Help</Text>
                    </Pressable>

                    <Pressable style={{
                        width: '32%',
                        backgroundColor: '#202020',
                        paddingVertical: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <MaterialIcons name='wallet' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Waller</Text>
                    </Pressable>

                    <Pressable style={{
                        width: '32%',
                        backgroundColor: '#202020',
                        paddingVertical: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 10,
                        borderTopRightRadius: 30,
                        borderBottomRightRadius: 30
                    }}>
                        <MaterialIcons name='schedule' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Trips</Text>
                    </Pressable>
                </View>
            </SafeAreaView>

            <View style={{
                paddingHorizontal: 10,
                marginTop: 30,
                gap: 20
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <MaterialIcons name='inbox' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Messages</Text>
                    </View>

                    <Pressable style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        padding: 9,
                        borderRadius: 5
                    }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'#fff'} />
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <MaterialIcons name='settings' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Settings</Text>
                    </View>

                    <Pressable style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        padding: 9,
                        borderRadius: 5
                    }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'#fff'} />
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <MaterialIcons name='person' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Earn by driving or delivering</Text>
                    </View>

                    <Pressable style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        padding: 9,
                        borderRadius: 5
                    }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'#fff'} />
                    </Pressable>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 10
                    }}>
                        <MaterialIcons name='priority-high' size={25} color={'#fff'} />
                        <Text style={{ fontSize: 20, color: '#fff' }}>Legal</Text>
                    </View>

                    <Pressable style={{
                        borderWidth: 1,
                        borderColor: '#fff',
                        padding: 9,
                        borderRadius: 5
                    }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'#fff'} />
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}