import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const CharacterCard = () => {
  let url =
    "https://images.thedirect.com/media/article_full/rick-morty-anime.jpg?imgeng=/cmpr_60/w_auto";
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/characters/123");
      }}
      style={styles.parent}
    >
      <Image
        style={styles.imageStyle}
        source={{
          uri: url,
        }}
      />
      <View>
        <Text style={{ fontWeight: 700 }}>Rick Sanchez</Text>
        <Text style={{ fontSize: 10, textAlign: "center" }}>Human,Alive</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  parent: {
    width: "40%",
    alignItems: "center",
  },
  imageStyle: {
    width: "100%",
    height: 140,
    borderRadius: 6,
    objectFit: "cover",
  },
});
