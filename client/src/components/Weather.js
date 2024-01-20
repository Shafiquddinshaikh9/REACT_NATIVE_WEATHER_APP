import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { haze, sunny, snow, rainy } from "../../assets/backgoundImg/index";
import { useEffect, useState } from "react/cjs/react.production.min";
const Weather = () => {
  const [backgroundImage, setBackGroundImage] = useState(null);
  const { weather } = weatherData;
  const [{ main }] = weather;
  useEffect(() => {
    console.log(main);
  }, [weatherData]);

  const getBackgroungImg = (weather) => {
    if (weather == "Snow") return snow;
    if (weather == "Clear") return sunny;
    if (weather == "Rain") return rainy;
    if (weather == "Haze") return haze;
    return haze;
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.bgImg}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
};

export default Weather;
r;

const styles = StyleSheet.create({
  container: {},
  bgImg: {},
});
