import React from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { AppProvider } from "./store";

let customFonts = {
  "Minecraft-regular": require("./assets/Fonts/Minecraft.ttf"),
};

import HomeScreen from "./Pages/Home";
import pokeBagScreen from "./Pages/PokeBag";
import PokedexScreen from "./Pages/Pokedex";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <AppProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Pokehome"
            tabBarOptions={{
              labelStyle: {
                fontFamily: "Minecraft-regular",
                fontSize: 13,
                margin: 0,
                padding: 0,
              },
              style: {
                backgroundColor: "#D3D3D3",
              },
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
              component={pokeBagScreen}
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
              component={PokedexScreen}
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
      </AppProvider>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Minecraft-regular",
  },
});
