import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 35,
    // backgroundColor: "#ffccb3",
  },
  title: {
    textAlign: "center",
    color: "#ffccb3",
    fontWeight: "bold",
    fontSize: 20,
  },
});
