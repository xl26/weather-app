import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function City({ data }) {
  function convertTime(time) {
    let unix_timestamp = time;

    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds
    var date = new Date(unix_timestamp * 1000);

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = date.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes;

    return formattedTime;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/sunset.jpg")}
        style={{ flex: 1 }}
      >
        <View style={{ justifyContent: "center", alignSelf: "center" }}>
          <Text style={{ fontSize: 40, fontWeight: "bold", color: "white" }}>
            {data.name}
          </Text>
          <Text style={{ fontSize: 32, fontWeight: "bold", color: "white" }}>
            {data.country}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 30 }}>
            <Feather name="user" size={24} color="red" />
            <Text style={{ fontSize: 32, color: "red", fontWeight: "bold" }}>
              {data.population}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Feather name="sunrise" size={50} color="white" />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {convertTime(data.sunrise)} A.M
          </Text>
          <Feather name="sunset" size={50} color="white" />
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            {convertTime(data.sunset)} P.M
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
