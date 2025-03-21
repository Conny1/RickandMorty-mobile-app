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
import { characterType, locationType } from "@/types";
import axios from "axios";

const LocationbyId = () => {
  const params = useLocalSearchParams<{ id: string }>();

  let url =
    "https://images.thedirect.com/media/article_full/rick-morty-anime.jpg?imgeng=/cmpr_60/w_auto";

  const route = router;
  const [location, setlocation] = useState<locationType>();
  const fetchlocations = async () => {
    try {
      const resp = await axios.get(
        `${process.env.EXPO_PUBLIC_BASE_URL}/v1/location/${params.id}`
      );
      const data = resp.data;
      if (data?.data) {
        setlocation(data.data);
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
        {location?.name}
      </Text>
      <View style={styles.detailsContainer}>
        <View style={styles.details}>
          <Text style={{ fontWeight: 500, color: "#e697c6" }}>Type:</Text>
          <Text style={{ color: "#93c242" }}>{location?.type}</Text>
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
          <Text style={{ color: "#93c242" }}>{location?.dimension}</Text>
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
      <SafeAreaView>
        <FlatList
          data={location?.residents}
          horizontal={true}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => route.push(`/characters/${item.id}`)}
                style={{ width: 70, height: 80, marginRight: 10 }}
              >
                <Image
                  style={styles.imageStyle}
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
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
