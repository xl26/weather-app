import React from "react";
import Dashboard from '../dashboard';
import { UpcomingWeather } from "../upcoming-weather";
import City from "../city";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
            backgroundColor: 'lightblue'
        },
        headerStyle: {
            backgroundColor: 'lightblue'
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            color: 'tomato'
        }
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <Dashboard weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list.splice(1, weather.list.length)}/>}
        </Tab.Screen>
      <Tab.Screen
        name={"City"}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <City data={weather.city} />}
        </Tab.Screen>
    </Tab.Navigator>
  );
};
