import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LocationCard } from "@/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { locationType } from "@/types";
import { SafeAreaView } from "react-native-safe-area-context";

const Location = () => {
  const [locations, setlocations] = useState<locationType[]>([]);
  const fetchlocations = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/location`
      );
      const data = resp.data;
      if (data?.data?.results) {
        setlocations(data.data.results);
      }
    } catch (error) {
      console.log(error, "erorr");
    }
  };
  useEffect(() => {
    fetchlocations();
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
          data={locations}
          renderItem={LocationCard}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
  row: {
    marginBottom: 10,
  },
  scrollContainer: {
    marginBottom: 150,
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
