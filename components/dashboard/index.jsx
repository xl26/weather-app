import React from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/WeatherConfig/weatherType';
 
var styles = require('./styles');

function Dashboard({weatherData}) {
  const {feels_like, temp_max, temp_min, temp} = weatherData.main
  const main  = weatherData.weather[0].main
  function kelvinToCelcius(k){
    return Math.floor(k - 273.15);
  }
  return (
    <SafeAreaView style={[styles.wrapper, {backgroundColor: `${weatherType[main].backgroundColor}`, opacity: 0.5}]}>
        <View style={styles.container}>
            <Feather name={weatherType[main].icon} size={100} color="black" />
            <Text>Current Weather</Text>
            <Text style={styles.temp}>{kelvinToCelcius(temp)}</Text>
            <Text style={styles.feels}>Feels like {kelvinToCelcius(feels_like)}</Text>
            <View style={styles.highLowWrapper}>
                <Text style={styles.highLow}>High: {kelvinToCelcius(temp_max)}</Text>
                <Text style={styles.highLow}>Low: {kelvinToCelcius(temp_min)}</Text>
            </View>
        </View>
        <View style={styles.bodyWrapper}>
            <Text style={styles.desc}>{main}</Text>
            <Text style={styles.msg}>{weatherType[main].message}</Text>
        </View>
    </SafeAreaView>
  )
}



export default Dashboard