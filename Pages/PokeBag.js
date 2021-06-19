import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useAppState, useAppDispatch } from "../store";
import PokebagItem from "../components/PokabagItem";

function pokeBagScreen({ route, navigation }) {
  const { pokebag } = useAppState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon team</Text>
      <View style={styles.bagContainer}>
        {pokebag.length > 0
          ? pokebag.map((pokemon, idx) => (
              <PokebagItem
                pokemon={pokemon}
                style={styles.pokemonSlot}
                index={idx}
                key={idx}
              />
            ))
          : null}
      </View>
    </View>
  );
}

export default pokeBagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  bagContainer: {
    flex: 1,
    alignItems: "center",
    margin: 20,
    minWidth: "90%",
    backgroundColor: "#ff4040",
  },
  title: {
    fontSize: 30,
    fontFamily: "Minecraft-regular",
    marginTop: 30,
    color: "yellow",
  },
  pokemonSlot: {
    flex: 1,
    margin: 5,
    minWidth: "95%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    flexDirection: "row",
  },
});
