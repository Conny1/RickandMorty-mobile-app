import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import {
  useRouter,
  useLocalSearchParams,
  RelativePathString,
} from "expo-router";
import { Picker } from "@react-native-picker/picker";

const FilterComponent = ({ screen }: { screen: string }) => {
  const router = useRouter();
  const params = useLocalSearchParams(); // Get current query parameters
  const [filters, setFilters] = useState({
    name: params.name || "",
    status: params.status || "",
    species: params.species || "",
    gender: params.gender || "",
    dimension: params.dimension || "",
    type: params.type || "",
  });

  // Handle input changes
  const handleInputChange = (name: string, value: string) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  // Apply filters and update the URL
  const applyFilters = () => {
    let queryParams: Record<string, string> = {};

    // Add non-empty filters to the query parameters
    Object.entries(filters).forEach(([key, value], index) => {
      if (value && value !== "") {
        queryParams[key] = value as string;
        // console.log(value, queryParams, "set");
      }
    });

    let path: "/character" | "/location" = screen as "/character";
    router.push({
      pathname: `${path}`,
      params: queryParams,
    });

    // console.log(params, "params", queryParams);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      name: "",
      status: "",
      species: "",
      gender: "",
      dimension: "",
      type: "",
    });

    let path: "/character" | "/location" = screen as "/character";
    router.push({
      pathname: `/${path}`, // Adjust to your route path
    });
  };

  return (
    <View style={styles.containerFilter}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={filters.name as string}
        onChangeText={(text) => handleInputChange("name", text)}
      />

      {screen === "character" && (
        <>
          <Picker
            selectedValue={filters.status as string}
            onValueChange={(itemValue: string) =>
              handleInputChange("status", itemValue)
            }
          >
            <Picker.Item label="Status" value="" />
            <Picker.Item label="Alive" value="alive" />
            <Picker.Item label="Dead" value="dead" />
            <Picker.Item label="Unknown" value="unknown" />
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Species"
            value={filters.species as string}
            onChangeText={(text) => handleInputChange("species", text)}
          />
          <Picker
            selectedValue={filters.gender as string}
            onValueChange={(itemValue: string) =>
              handleInputChange("gender", itemValue)
            }
          >
            <Picker.Item label="Gender" value="" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Genderless" value="genderless" />
            <Picker.Item label="Unknown" value="unknown" />
          </Picker>
        </>
      )}

      {screen === "location" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Dimension"
            value={filters.species as string}
            onChangeText={(text) => handleInputChange("dimension", text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Type"
            value={filters.species as string}
            onChangeText={(text) => handleInputChange("type", text)}
          />
        </>
      )}

      <View style={styles.buttonContainer}>
        <Button title="Apply Filters" onPress={applyFilters} />
        <Button title="Reset Filters" onPress={resetFilters} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFilter: {
    padding: 16,
    position: "absolute",
    left: 20,
    right: 20,
    // height: 500,
    top: 60,
    zIndex: 999,
    backgroundColor: "white",
    borderRadius: 10,

    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default FilterComponent;
