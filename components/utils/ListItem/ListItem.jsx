import React from "react";
import { View,Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import { weatherType } from "../WeatherConfig/weatherType";
var styles = require('./styles');

export const ListItem = (props) => {
    const { dt_text, max, min, condition } = props;
    function kelvinToCelcius(k){
        return Math.floor(k - 273.15);
      }
    return (
        <View style={styles.item}>
            <Feather name={`${weatherType[condition].icon}`} size={50} color="white" />
            <Text style={styles.date}>{new Date(dt_text).toLocaleDateString()}</Text>
            <Text style={styles.temp}>{kelvinToCelcius(min)}&deg;C/</Text>
            <Text style={styles.temp}>{kelvinToCelcius(max)}&deg;C</Text>
        </View>
    )
}
