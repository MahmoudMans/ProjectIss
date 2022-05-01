import React from "react";
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "darkslateblue",
  },
  text: {
    color: "#fff",
    fontSize: 23,
    textAlign: "center",
  },
});
