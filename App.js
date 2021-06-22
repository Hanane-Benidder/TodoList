import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import Header from "./header";
import ItemList from "./itemList";
export default function App() {
  const [todos, settodos] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Clean Home", key: "2" },
    { text: "Play a video game ", key: "3" },
  ]);
  const handlePress = (key) => {
    settodos((prevtodo) => {
      return prevtodo.filter((todo) => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 400,
          height: 80,
          paddingTop: 35,

          height: 100,
          uri: "https://image.shutterstock.com/image-vector/hand-sketched-lettering-typography-webpage-600w-1079744555.jpg",
        }}
      />
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ItemList item={item} handlePress={handlePress} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
