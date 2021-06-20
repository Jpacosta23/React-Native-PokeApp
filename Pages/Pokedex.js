import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useAppState, useAppDispatch } from "../store";
import PokedexItem from "../components/PokedexItem";

function PokedexScreen() {
  const { pokedex } = useAppState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
      <ScrollView style={{ minWidth: "90%" }}>
        <View style={styles.pokedexContainer}>
          {pokedex.length > 0
            ? pokedex.map((pokemon, idx) => (
                <PokedexItem
                  pokemon={pokemon}
                  style={styles.pokemonSlot}
                  index={idx}
                  key={idx}
                />
              ))
            : null}
        </View>
      </ScrollView>
    </View>
  );
}

export default PokedexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  pokedexContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    minWidth: "95%",
    backgroundColor: "#ff4040",
  },
  title: {
    fontSize: 30,
    fontFamily: "Minecraft-regular",
    marginTop: 30,
    color: "yellow",
  },
  pokemonSlot: {
    margin: 10,
    minWidth: "90%",
    backgroundColor: "red",
    flexDirection: "row",
  },
});
