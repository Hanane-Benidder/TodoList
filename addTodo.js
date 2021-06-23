import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
export default function AddTodo({ handlesubmit }) {
  const [text, settext] = useState("");
  const changeInput = (val) => {
    settext(val);
    console.log("value", val);
  };
  return (
    <View>
      <TextInput
        style={styles.item}
        placeholder="Add Todo"
        onChangeText={changeInput}
      />
      <Button
        style={styles.btton}
        title="Add Todo"
        onPress={() => handlesubmit(text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  btton: {
    color: "#ffddcc",
    padding: 18,
    borderColor: "#ffddcc",
    borderWidth: 1,
    borderRadius: 10,
  },
  item: {
    paddingHorizontal: 8,
    marginBottom: 10,
    borderColor: "#ffddcc",
    borderBottomWidth: 1,
    borderBottomColor: "#ffddcc",
    borderRadius: 10,
  },
});
