import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const LocationbyId = () => {
  let url =
    "https://images.thedirect.com/media/article_full/rick-morty-anime.jpg?imgeng=/cmpr_60/w_auto";
  const route = router;
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          route.push("/location");
        }}
        style={{ position: "absolute", zIndex: 1 }}
      >
        <AntDesign name="left" size={40} color="black" />
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
          color: "#01afca",
        }}
      >
        Earth
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={{ fontWeight: 500, color: "#e697c6" }}>Type:</Text>
          <Text style={{ color: "#93c242" }}>Planet</Text>
        </View>
        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500, color: "#e697c6" }}>
            {" "}
            First episode:
          </Text>
          <Text style={{ color: "#93c242" }}>Pilot</Text>
        </View>

        {/*  */}
        <View style={styles.details}>
          <Text style={{ fontWeight: 500, color: "#e697c6" }}>Dimension:</Text>
          <Text style={{ color: "#93c242" }}>Dimension C-137</Text>
        </View>
      </View>
      <Text
        style={{
          marginLeft: 20,

          marginBottom: 10,
          color: "#e697c6",
        }}
      >
        Residents:
      </Text>
      <View style={styles.residents}>
        <TouchableOpacity style={{ width: 70, height: 80 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: url,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 70, height: 80 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: url,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 70, height: 80 }}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: url,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("/characters/123");
          }}
          style={{ width: 70, height: 80 }}
        >
          <Image
            style={styles.imageStyle}
            source={{
              uri: url,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationbyId;

const styles = StyleSheet.create({
  main: {
    // margin: 10,
    flex: 1,
  },
  imageContainer: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    marginBottom: 10,
    borderBottomStartRadius: 60,
    overflow: "hidden",
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
    width: "90%",
    padding: 6,
    borderRadius: 6,
    marginBottom: 10,
  },
  residents: {
    width: "90%",
    marginLeft: 20,
    flexDirection: "row",
    gap: 10,
  },
});
