import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Tabs } from "./components/Tabs";
import useGetWeather from "./hooks/useGetWeather";

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export default function App() {
  const [loading, error, weather] = useGetWeather();

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    );
  }
  // return (
  //   <NavigationContainer>
  //     <Tabs weather={weather} />
  //   </NavigationContainer>
  // );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});
