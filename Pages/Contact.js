import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

function MessageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pokedex</Text>
      <Button
        title="Go to Pokehome"
        onPress={() => navigation.navigate("Pokehome")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default MessageScreen;
