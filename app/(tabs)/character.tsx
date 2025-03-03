import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Character = () => {
  return (
    <View style={styles.parent}>
      <Text>Character</Text>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  parent: {
    margin: 10,
  },
});
