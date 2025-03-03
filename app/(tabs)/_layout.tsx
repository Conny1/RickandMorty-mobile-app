import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#01afca", height: 55 },
        tabBarIcon: ({ focused }) => {
          let iconName: "movie-open" | "map-marker" | "account-supervisor" =
            "account-supervisor";

          if (route.name === "character") {
            iconName = "account-supervisor";
          } else if (route.name === "episodes") {
            iconName = "movie-open";
          } else if (route.name === "location") {
            iconName = "map-marker";
          }

          return (
            <View style={{ alignItems: "center" }}>
              <MaterialCommunityIcons
                name={iconName}
                size={24}
                color={`${focused ? "#fff" : "#75c8d6"}`}
              />
            </View>
          );
        },
        tabBarShowLabel: true, // Show labels
        tabBarLabelStyle: { fontSize: 12 }, // Customize label style
      })}
    >
      <Tabs.Screen
        name="character"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#fff" : "#75c8d6" }}>
              Characters
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="location"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#fff" : "#75c8d6" }}>
              Locations
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "#fff" : "#75c8d6" }}>
              Episodes
            </Text>
          ),
        }}
      />
    </Tabs>
  );
}
