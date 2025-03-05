import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const CharacterbyId = () => {
  let url =
    "https://images.thedirect.com/media/article_full/rick-morty-anime.jpg?imgeng=/cmpr_60/w_auto";
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
            uri: url,
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
        Rick Sanchez
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Status:</Text>
          <Text>Alive</Text>
        </View>
        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}> Species:</Text>
          <Text>Human</Text>
        </View>

        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Gender:</Text>
          <Text>Male</Text>
        </View>
        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Origin:</Text>
          <Text>Earth</Text>
        </View>
        {/*  */}

        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>Location:</Text>
          <Text>Earth</Text>
        </View>
        {/*  */}

        <View style={styles.details}>
          <Text style={{ fontWeight: 500 }}>First episode:</Text>
          <Text>Pilot</Text>
        </View>
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
