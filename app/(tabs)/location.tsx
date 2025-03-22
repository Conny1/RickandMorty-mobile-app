import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FilterComponent, LocationCard } from "@/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { locationType } from "@/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const Location = () => {
  const [locations, setlocations] = useState<locationType[]>([]);
  const [filter, setfilter] = useState(false);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const params = useLocalSearchParams();
  const queryString = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  const fetchlocations = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/location`,
        { params: { ...params, page } }
      );
      const data = resp.data;
      if (data?.data?.results) {
        setlocations((prev) =>
          page === 1 ? data.data.results : [...prev, ...data.data.results]
        );
      }

      if (data.data.info.next === null) {
        setloading(false); // No more pages to load
      } else {
        setpage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error, "Error fetching characters");
    }
  };
  useEffect(() => {
    setpage(0); // Reset page to 1 when query changes
    setlocations([]); // Clear previous results
    setloading(true);
    fetchlocations();
    // console.log("h dhdh", process.env.EXPO_PUBLIC_BASE_URL, characters);
  }, [queryString]);
  return (
    <View style={styles.parent}>
      <View style={styles.headerCon}>
        <View style={styles.searchcontainer}>
          <TextInput
            style={styles.input}
            placeholder="All locations in Rick and Morty"
            placeholderTextColor="#888"
            editable={false}
          />
          {/* 
          <TouchableOpacity style={styles.iconContainer}>
            <Ionicons name="search-circle-sharp" size={35} color="#01afca" />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity
          onPress={() => setfilter((prev) => !prev)}
          style={{
            height: 60,
            width: 70,
            flexDirection: "row",
            backgroundColor: "gray",
            paddingHorizontal: 10,
            paddingVertical: 8,
            // marginHorizontal: 16,
            borderTopEndRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            elevation: 3,
          }}
        >
          <Feather name="filter" size={24} color="white" />
          <Text style={{ fontWeight: 500, color: "white" }}>Filter</Text>
        </TouchableOpacity>
        {filter && <FilterComponent screen="location" />}
      </View>

      <SafeAreaView style={styles.scrollContainer}>
        <FlatList
          data={locations}
          renderItem={LocationCard}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={fetchlocations}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            loading ? <ActivityIndicator size="large" /> : null
          }
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
  headerCon: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    marginBottom: 150,
  },
  row: {
    marginBottom: 10,
  },

  searchcontainer: {
    height: 60,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    // borderRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 8,
    // marginHorizontal: 16,
    marginBottom: 10,
    elevation: 3,
    gap: 5,
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
