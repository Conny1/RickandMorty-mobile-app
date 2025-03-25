import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { characterType } from "@/types";
import axios from "axios";

const CharacterbyId = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [character, setCharacter] = useState<characterType>();

  const fetchCharacters = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/character/${params.id}`
      );
      if (resp.data?.data) {
        setCharacter(resp.data.data);
      }
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <View style={styles.main}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => router.push("/character")}
        style={styles.backButton}
      >
        <AntDesign name="left" size={24} color="#ffffff" />
      </TouchableOpacity>

      {/* Character Image */}
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{ uri: character?.image }} />
      </View>

      {/* Character Name */}
      <Text style={styles.characterName}>{character?.name}</Text>

      {/* Character Details */}
      <View style={styles.detailsContainer}>
        {[
          { label: "Status", value: character?.status },
          { label: "Species", value: character?.species },
          { label: "Gender", value: character?.gender },
          { label: "Origin", value: character?.origin?.name },
          { label: "Location", value: character?.location?.name },
        ].map((detail, index) => (
          <View key={index} style={styles.details}>
            <Text style={styles.detailLabel}>{detail.label}:</Text>
            <Text style={styles.detailValue}>{detail.value}</Text>
          </View>
        ))}
      </View>

      {/* Residents Title */}
      <Text style={styles.residentsTitle}>Episodes:</Text>

      {/* Episodes List */}
      <SafeAreaView>
        <FlatList
          data={character?.episode}
          horizontal
          showsHorizontalScrollIndicator={false}
          initialNumToRender={10}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.episodeCard}>
              <Text style={styles.episodeTitle}>{item.name}</Text>
              <Text style={styles.episodeDate}>{item.air_date}</Text>
              <Text style={styles.episodeCode}>{item.episode}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

export default CharacterbyId;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#75c8d6", // Dark background
    padding: 10,
  },
  backButton: {
    marginBottom: 10,
    padding: 8,
  },
  imageContainer: {
    width: "70%",
    height: 250,
    alignSelf: "center",
    marginBottom: 15,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  characterName: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#F8FAFC", // White
    marginBottom: 10,
  },
  detailsContainer: {
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#94A3B8", // Gray border
    width: "85%",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1E293B", // Darker card
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#E2E8F0",
  },
  detailValue: {
    color: "#CBD5E1",
  },
  residentsTitle: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#E697C6", // Pinkish
  },
  episodeCard: {
    width: 160,
    height: 110,
    marginRight: 12,
    backgroundColor: "#1E293B",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Android shadow
  },
  episodeTitle: {
    color: "#F8FAFC",
    fontSize: 14,
    fontWeight: "bold",
  },
  episodeDate: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 4,
  },
  episodeCode: {
    color: "#38BDF8",
    fontSize: 12,
    marginTop: 2,
  },
});
