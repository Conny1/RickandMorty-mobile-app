import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import { characterType } from "@/types";
import axios from "axios";

const CharacterbyId = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [character, setcharacter] = useState<characterType>();
  const fetchCharacters = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/character/${params.id}`
      );
      const data = resp.data;
      if (data?.data) {
        setcharacter(data.data);
      }
    } catch (error) {
      console.log(error, "erorr");
    }
  };
  useEffect(() => {
    fetchCharacters();
    // console.log("h dhdh", process.env.EXPO_PUBLIC_BASE_URL, characters);
  }, []);

  const route = router;
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          route.push("/character");
        }}
      >
        <AntDesign name="left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: character?.image,
          }}
        />
      </View>
      <Text
        style={{
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 500,
          marginBottom: 10,
        }}
      >
        {character?.name}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Status:</Text>
          <Text>{character?.status}</Text>
        </View>
        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}> Species:</Text>
          <Text>{character?.species}</Text>
        </View>

        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Gender:</Text>
          <Text>{character?.gender}</Text>
        </View>
        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Origin:</Text>
          <Text>{character?.origin.name}</Text>
        </View>
        {/*  */}

        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Location:</Text>
          <Text>{character?.location.name}</Text>
        </View>
        {/*  */}

        {/* <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>First episode:</Text>
          <Text>Pilot</Text>
        </View> */}
      </View>
    </View>
  );
};

export default CharacterbyId;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    flex: 1,
  },
  imageContainer: {
    width: "70%",
    height: "50%",
    alignSelf: "center",
    marginBottom: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    objectFit: "cover",
  },
  details: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
  detailsContainer: {
    alignSelf: "center",
    borderWidth: 1,
    width: "80%",
    padding: 6,
    borderRadius: 6,
  },
});
