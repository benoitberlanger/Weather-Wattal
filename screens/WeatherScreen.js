import { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Alert,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
  Image,
} from "react-native";
import * as Location from "expo-location";
import WeatherCard from "../components/WeatherCard";

import { ScrollView } from "native-base";

const url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&exclude=minutely&appid=70559309711ff037f403870e0d24ef72&lang=fr`;

export default function WeatherScreen({ navigation }) {
  const [forecast, setForecast] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const { height, width } = useWindowDimensions();

  const loadForecast = async () => {
    setRefresh(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("permission exiger");
    }
    let location = await Location.getCurrentPositionAsync({});

    const response = await fetch(
      `${url}&lat=${location.coords.latitude}&lon=${location.coords.longitude}`
    );
    const data = await response.json();
    if (!response.ok) {
      Alert.alert("Error");
    } else {
      setForecast(data);
    }
    setRefresh(false);
  };
  useEffect(() => {
    loadForecast();
  }, []);
  if (!forecast) {
    return (
      <SafeAreaView>
        <ActivityIndicator size="large" color="blue" paddingTop={200} />
      </SafeAreaView>
    );
  }

  const current = forecast.current.weather[0];

  const icon = current.icon;

  const icons = {
    "01d": require("../assets/sun.png"),
  };
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={require("../assets/Mars.jpg")}
        style={{
          flex: 1,
          alignItems: "center",
          width: width,
          height: height * 1.08,
        }}
      />

      <ScrollView
        refreshControl={
          <RefreshControl refresh={refresh} onRefresh={() => loadForecast()} />
        }
      >
        <Text
          style={{
            fontSize: 50,
            alignItems: "center",
            paddingTop: 70,
            color: "white",
          }}
        >
          {forecast.timezone}
        </Text>
        <View>
          <Image style={styles.largeIcon} source={icons[icon]} />
          <View style={{ paddingStart: 200 }}>
            <Text
              style={{
                fontSize: 50,
                color: "white",
              }}
            >
              {Math.round(forecast.current.temp)}°C
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  largeIcon: {
    alignItems: "center",
    marginTop: 50,
    width: 100,
    height: 100,
  },
});
