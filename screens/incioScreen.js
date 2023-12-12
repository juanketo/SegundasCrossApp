import * as React from "react";
import { StatusBar, Image, ImageBackground, StyleSheet, Text, Pressable, View, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export const inicioScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("../assets/portada1.png")}
      style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
         
        <View style={styles.container}>
          <Text style={styles.titulo}>HORA DE AVENTURA</Text>
          <Text style={styles.subtitulo}>
            Dentro de esta app, tú puedes agregar a tus personajes favoritos y
            los reinos de hora de aventura.
          </Text>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#800040" : "#BF0960" },
            ]}
            onPress={() => navigation.navigate("vistasBotones")}>
            <Text style={styles.buttonText}>Comenzar</Text>
          </Pressable>
          <Image source={require("../assets/hada.png")} style={styles.image} />
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
    marginTop: 30,
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "justify",
  },
  subtitulo: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 15,
    color: "#f1f1f1",
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
  image: {
    marginTop: 40,
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});
