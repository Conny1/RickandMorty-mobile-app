import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CharacterCard } from "../../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { characterType } from "@/types";
import axios from "axios";

const Character = () => {
  const [characters, setcharacters] = useState<characterType[]>([]);
  const fetchCharacters = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/character`
      );
      const data = resp.data;
      if (data?.data?.results) {
        setcharacters(data.data.results);
      }
    } catch (error) {
      console.log(error, "erorr");
    }
  };
  useEffect(() => {
    fetchCharacters();
    // console.log("h dhdh", process.env.EXPO_PUBLIC_BASE_URL, characters);
  }, []);

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

      <SafeAreaView style={styles.scrollContainer}>
        <FlatList
          data={characters}
          renderItem={CharacterCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </SafeAreaView>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
  scrollContainer: {
    marginBottom: 150,
  },
  row: {
    justifyContent: "space-evenly", // Distributes cards evenly across the row
    marginBottom: 10,
    gap: 3,
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
