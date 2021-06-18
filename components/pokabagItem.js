import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useAppState, useAppDispatch } from "../store";
import { releasePokemon } from "../store/actions";

const deviceWidth = Dimensions.get("window").width;

function PokebagItem({ pokemon, style, index }) {
  const { pokebag } = useAppState();
  const dispatch = useAppDispatch();
  const handlePress = () => {
    pokebag.splice(index, 1);
    releasePokemon(pokebag, dispatch);
  };
  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.text}>id: {index}</Text>
        <Text style={styles.text}>{pokemon.name}</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={
            pokemon
              ? { uri: pokemon.sprites.front_default }
              : require("../assets/Imgs/Pokeball_icon-icons.com_67533.png")
          }
          style={styles.image}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => handlePress()}
        >
          <Text style={styles.text}>Release</Text>
          <Image
            source={require("../assets/Imgs/free.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: deviceWidth / 4,
    height: deviceWidth / 4,
  },
  icon: {
    width: deviceWidth / 10,
    height: deviceWidth / 10,
  },
  text: {
    fontFamily: "Minecraft-regular",
    fontSize: 20,
    margin: 5,
  },
});

export default PokebagItem;
