import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { useAppState, useAppDispatch } from "../store";
import PokebagItem from "../components/pokabagItem";

function DetailScreen({ route, navigation }) {
  const { pokebag } = useAppState();
  const dispatch = useAppDispatch();

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
              />
            ))
          : null}
      </View>
    </View>
  );
}

export default DetailScreen;

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
    marginTop: 20,
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
