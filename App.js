import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./header";
import ItemList from "./itemList";
import AddTodo from "./addTodo";
export default function App() {
  const [todos, settodos] = useState([
    { text: "Play a video game ", key: "3" },
    { text: "Watch my best movie", key: "4" },
    { text: "Doing all my homework at time", key: "5" },
  ]);
  const handlePress = (key) => {
    settodos((prevtodo) => {
      return prevtodo.filter((todo) => todo.key != key);
    });
  };
  const handlesubmit = (text) => {
    if (text.length > 3) {
      settodos((prevtodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevtodo];
      });
    } else {
      Alert.alert("Sorry", "Todos must to be over 3 chars", [{ text: "Okey" }]);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
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
        <AddTodo handlesubmit={handlesubmit} />
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
    </TouchableWithoutFeedback>
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
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
