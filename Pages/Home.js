import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { useAppState, useAppDispatch } from "../store";
import {
  getPokemonDetail,
  deletePokemonDetail,
  capturePokemon,
} from "../store/actions";

function HomeScreen({ navigation }) {
  // const [counter, setCounter] = useState(0);
  const { pokemon, pokebag, counter } = useAppState();
  const dispatch = useAppDispatch();

  const handlePress = async () => {
    try {
      let random = Math.round(Math.random() * 151);
      await getPokemonDetail(random, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  const captureButton = () => {
    let random = Math.round(Math.random() * 10);
    if (random >= 2) {
      // setCounter(counter + 1);
      capturePokemon([...pokebag, pokemon], dispatch);
      deletePokemonDetail(dispatch);
    } else {
      deletePokemonDetail(dispatch);
      alert(`${pokemon.name} has scaped`);
    }
  };
  useEffect(() => {
    console.log(counter);
  }, [pokemon]);

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require("../assets/Imgs/logo.png")}
          style={{ width: 300, height: 110 }}
        />
        <Text style={styles.title}>Catch them now</Text>
        <View style={styles.constainerCol}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
            <Text style={styles.buttonText}>Find Pokemon</Text>
          </TouchableOpacity>
          {pokemon ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (counter < 6) {
                  captureButton();
                } else {
                  alert("pokebag full");
                  deletePokemonDetail(dispatch);
                }
              }}
            >
              <Text style={styles.buttonText}>Throw pokeball</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>

      <View style={styles.containerRow}>
        {!pokemon ? (
          <Image
            source={require("../assets/Imgs/Pokeball_icon-icons.com_67533.png")}
            style={{ width: 120, height: 120 }}
          />
        ) : (
          <Image
            source={
              pokemon
                ? { uri: pokemon.sprites.front_default }
                : require("../assets/Imgs/Pokeball_icon-icons.com_67533.png")
            }
            style={{ width: 140, height: 140 }}
          />
        )}
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 4,
    alignItems: "center",
    justifyContent: "space-around",
  },
  containerRow: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: 300,
  },
  constainerCol: {
    height: 200,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 30,
    fontFamily: "Minecraft-regular",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Minecraft-regular",
    color: "red",
  },
});
