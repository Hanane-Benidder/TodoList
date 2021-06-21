import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export default function ItemList({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress()}>
      <Text style={styles.item}>{item.text} </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    padding: 18,
    marginTop: 15,
    borderColor: "aqua",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
