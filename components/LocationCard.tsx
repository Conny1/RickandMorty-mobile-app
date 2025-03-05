import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const LocationCard = () => {
  let url =
    "https://images.thedirect.com/media/article_full/rick-morty-anime.jpg?imgeng=/cmpr_60/w_auto";
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("/locations/123");
      }}
      style={styles.parent}
    >
      <Image
        style={styles.imageStyle}
        source={{
          uri: url,
        }}
      />
      <View style={styles.info}>
        <Text style={{ fontWeight: 700 }}>Earth</Text>
        <Text style={{ fontSize: 10 }}>Humans</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  parent: {
    width: "90%",
    alignItems: "center",
    marginBottom: 10,
  },
  imageStyle: {
    width: "100%",
    height: 140,
    borderRadius: 6,
    objectFit: "cover",
  },
  info: {
    alignSelf: "flex-start",
  },
});
