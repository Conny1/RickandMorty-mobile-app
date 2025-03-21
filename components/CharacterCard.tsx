import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { characterType } from "@/types";

type Props = {
  item: characterType;
};
const CharacterCard = ({ item }: Props) => {
  let url = item.image;
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/characters/${item.id}`);
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
        <Text style={{ fontWeight: 700 }}>{item.name}</Text>
        <Text style={{ fontSize: 10, textAlign: "center" }}>
          {item.species},{item.status}
        </Text>
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
