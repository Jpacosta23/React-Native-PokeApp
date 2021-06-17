import React, { useState, useEffect } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
  "Minecraft-regular": require("./assets/Fonts/Minecraft.ttf"),
  "MisterPixel-regular": require("./assets/VTF MisterPixel/otf/Mister Pixel Regular.otf"),
  "MisterPixel-tools": require("./assets/VTF MisterPixel/otf/Mister Pixel Tools.otf"),
};

import HomeScreen from "./Pages/Home";
import DetailScreen from "./Pages/Details";
import ContactScreen from "./Pages/Contact";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync(customFonts);
      setFontsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFonts();
  }, []);
  if (fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Pokehome"
          tabBarOptions={{
            activeTintColor: "red",
            inactiveTintColor: "#1a1a1a",
          }}
        >
          <Tab.Screen
            name="Pokehome"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={require("./assets/Imgs/Pokeball_icon-icons.com_67533.png")}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Pokebag"
            component={DetailScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={require("./assets/Imgs/pokebag.png")}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Pokedex"
            component={ContactScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Image
                  source={require("./assets/Imgs/pokedex.png")}
                  style={{
                    width: size,
                    height: size,
                    borderRadius: size,
                  }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Minecraft-regular",
  },
});
