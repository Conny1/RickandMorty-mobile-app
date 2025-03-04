import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CharacterCard } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const Character = () => {
  return (
    <View style={styles.parent}>
      <View style={styles.searchcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="search-circle-sharp" size={35} color="#01afca" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </View>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
  searchcontainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingLeft: 10,
  },
  iconContainer: {
    paddingLeft: 8,
  },
});
