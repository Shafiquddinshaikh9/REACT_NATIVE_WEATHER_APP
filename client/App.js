import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import Weather from "./src/components/Weather";
export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setLoaded] = useState(true);

  const getWeatherData = async (cityname) => {
    setLoaded(false);
    const key = "4c5ae875bc205854d459d7c55dd3b507";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${key}`;
    try {
      const res = await fetch(api);
      if (res.status == 200) {
        const data = await res.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherData("Mumbai");
    console.log(weatherData, "weather data");
  }, []);

  if (!loaded) {
    return (
      <View>
        <ActivityIndicator color="gray" size={36} />
      </View>
    );
  } else if (weatherData == null) {
  }

  return (
    <View style={styles.container}>
      <Weather />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
