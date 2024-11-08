import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
    return (
        <View style={{ backgroundColor: "tomato", marginTop: 40 }}>
            <Text>This is Home component</Text>
            <Link href="/profile">Profile</Link>
        </View>
    );
};

export default Home;
