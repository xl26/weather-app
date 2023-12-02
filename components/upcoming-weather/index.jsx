import React from 'react'
import { View, SafeAreaView, Text, FlatList,StatusBar,Image,ImageBackground } from 'react-native'
import  {ListItem}  from '../utils/ListItem/ListItem';
var styles = require('./styles');

export const UpcomingWeather = ({ weatherData }) => {
    
    const renderItem = ({item}) => (
        <ListItem 
        condition={item.weather[0].main} 
        dt_text={item.dt_text} 
        min={item.main.temp_min} 
        max={item.main.temp_max} />
    )
    const dat = weatherData.map((item) => {
        let res = {
            dt_text: item.dt_txt,
            main: {
                temp_max: item.main.temp_max,
                temp_min: item.main.temp_min
            },
            weather: item.weather
        }
        
        return res
    })
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/clouds.jpg')} style={styles.image}>
        <FlatList 
            data={dat}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_text}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}
