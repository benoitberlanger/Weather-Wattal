import { ImageBackground } from "react-native";
import {
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
  View,
  Image,
} from "react-native";
import React, { useState } from "react";

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { height, width } = useWindowDimensions();

  setTimeout(() => {
    setLoading(true);
  }, 3000);

  if (!loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <ImageBackground
          source={require("../assets/aubrac.jpg")}
          style={{
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            width: width,
            height: height * 1.08,
          }}
        />
        <View
          style={{
            width: width * 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 150,
          }}
        >
          <ActivityIndicator visible={loading} size="large" color="blue" />

          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 200,
            }}
          >
            <Image source={require("../assets/logo.png")} style={styles.logo} />
          </View>
        </View>
      </View>
    );
  navigation.navigate("Weather");
  return null;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 400,
    height: 400,
  },
});
