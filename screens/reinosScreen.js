import * as React from "react";
import { StatusBar, Image, ImageBackground, StyleSheet, Text, Pressable, View, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";
import { adventureapi } from "../api/adventureapi";
import { useEffect, useState } from "react";
import { CardReino } from "./cardReino";

const Stack = createNativeStackNavigator();

export const reinosScreen = ({ navigation }) => {

  

  return (
    <ImageBackground
      source={require("../assets/reinosf.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.mainContainer}>
        
        <View style={styles.container}>
          <Text style={styles.titulo}>REINOS DE HORA DE AVENTURA</Text>
        </View>
        <View style={{ flexDirection:'row', flexWrap: "wrap", gap: 15,}}>
          <CardReino navigation={navigation} />
        </View>
        <View style={styles.container}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#800040" : "#BF0960" },
            ]}
            onPress={() => navigation.navigate("AgreReinoScreen")}
          >
            <Text style={styles.buttonText}>Agregar</Text>
          </Pressable>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "justify",
  },
  subtitulo: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "gray",
  },
  button: {
    marginTop: 70,
    backgroundColor: "#BF0960",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
