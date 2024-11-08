import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, Tabs } from "expo-router";
import { Button, Text } from "react-native";
import { Image, View } from "react-native";
// import { Avatar } from "react-native-elements";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "blue",
                headerStyle: { backgroundColor: "white" },
            }}
        >
            <Tabs.Screen
                name="(home)"
                // options={{
                //     title: "Home",
                //     tabBarIcon: ({ color }) => (
                //         <Ionicons size={28} name="home" color={color} />
                //     ),
                // }}

                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="home" color={color} />
                    ),
                    headerLeft: () => (
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 10,
                            }}
                        >
                            {/* <Image
                                style={{ marginTop: 5 }}
                                source={require("../../assets/images/icon.png")}
                            /> */}
                            {/* <Image
                                source={require("../../assets/images/react-logo.png")}
                            /> */}
                            <Text>Hello</Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View>
                            <Link href="(home)/profile">Profile</Link>
                        </View>
                    ),
                    headerTitle: "",
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color }) => (
                        <Ionicons size={28} name="cog" color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
