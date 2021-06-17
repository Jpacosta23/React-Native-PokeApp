import * as React from "react";
import { Button, View, Text } from "react-native";

function DetailScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Pokebag</Text>
      <Button
        title="Go to Pokehome"
        onPress={() => navigation.navigate("Pokehome")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default DetailScreen;
