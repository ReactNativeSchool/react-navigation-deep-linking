import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rowOdd: {
    backgroundColor: "#FBFBFB"
  },
  rowText: {
    color: "#4A4A4A",
    fontSize: 18,
    fontWeight: "500"
  },
  sep: {
    height: 1,
    backgroundColor: "#E4E4E4",
    flex: 1
  }
});

export const ListItem = ({ title, onPress, isOdd }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.row, isOdd && styles.rowOdd]}
  >
    <Text style={styles.rowText}>{title}</Text>
    <Ionicons name="ios-arrow-forward" size={25} color="#E7E7E7" />
  </TouchableOpacity>
);

export const List = props => (
  <FlatList
    {...props}
    ItemSeparatorComponent={() => <View style={styles.sep} />}
  />
);
