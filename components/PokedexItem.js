import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

function PokedexItem({ pokemon, style }) {
  return (
    <View style={style}>
      <View style={styles.container}>
        <Text style={styles.text}>id: {pokemon.id}</Text>
        <Text style={styles.text}>{pokemon.name}</Text>
        <View style={styles.container}>
          <Text style={styles.text}>Types:</Text>
          {pokemon.types.map((type, key) => (
            <View style={styles.container}>
              <FlatList
                data={[{ key: `${type.type.name}` }]}
                renderItem={({ item }) => (
                  <Text style={styles.list}>{item.key}</Text>
                )}
                horizontal
              />
            </View>
          ))}
        </View>
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
    fontSize: 18,
    margin: 5,
  },
  list: {
    fontFamily: "Minecraft-regular",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PokedexItem;
