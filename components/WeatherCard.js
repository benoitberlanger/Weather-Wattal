import { Text, StatusBar, ScrollView } from "native-base";
import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

function WeatherCard(props) {
  console.log(props);
  return (
    <View>
      <Text>{props.temp}</Text>
      <Text>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fefee2",
  },
  stretch: {
    height: 100,
    width: 100,
    resizeMode: "stretch",
    borderRadius: 20,
  },
  img: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
  text: {
    flex: 9 / 10,
    padding: 10,
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    height: "100%",
    fontSize: "12%",
  },
  heart: {
    height: 20,
  },
});

export default WeatherCard;
