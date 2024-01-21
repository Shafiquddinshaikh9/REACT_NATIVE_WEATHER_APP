import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { haze, sunny, snow, rainy } from "../../assets/backgoundImg/index.js";
const Weather = ({ weatherData }) => {
  console.log(weatherData, "wPage");
  const [backgroundImage, setBackGroundImage] = useState(null);
  const {
    weather,
    name,
    main: { temp, humidity },
  } = weatherData;
  const [{ main }] = weather;
  useEffect(() => {
    setBackGroundImage(getBackgroungImg(main));
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  bgImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  headerText: {
    fontSize: 36,
    marginTop: 10,
  },
});
