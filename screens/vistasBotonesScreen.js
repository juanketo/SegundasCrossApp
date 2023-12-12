
import * as React from "react";
import { StatusBar, ImageBackground, StyleSheet, Text, Pressable, View, } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export const vistasBotonesScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/vista.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.mainContainer}>
        
        <View style={styles.container}>
          <Text style={styles.titulo}>ELIJE UNA OPCIÓN</Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#800040" : "#BF0960" },
            ]}
            onPress={() => navigation.navigate("Reinos")}>
            <Text style={styles.buttonText}>Reinos</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#800040" : "#BF0960" },
            ]}
            onPress={() => navigation.navigate("Personajes")}>
            <Text style={styles.buttonText}>Personajes</Text>
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
  containerSVG: {
    height: "12%",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  linearGradient: {
    height: "130%",
    width: "100%",
  },
  titulo: {
    marginTop: 40,
    marginBottom: 30,
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "justify",
  },
  button: {
    marginTop: 80,
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
