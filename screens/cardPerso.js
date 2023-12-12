import * as React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { adventureapi } from "../api/adventureapi";
import { useEffect, useState } from "react";

export const CardPerso = ({ navigation }) => {
  const [dataPersonajes, setDataPersonajes] = useState({
    ok: false,
    msg: "",
    personajes: [],
  });

  const mostrarListaPersonajes = async () => {
    const httpRequest = adventureapi.get("/personajes");
    httpRequest.then((response) => {
      setDataPersonajes({
        loading: true,
        personajes: response.data.personajes,
      });
    });
  };

  useEffect(() => {
    mostrarListaPersonajes();
  }, []);


  const handleEliminar = (id) => {
    adventureapi.delete(`/personajes/${id}`);
    navigation.push('Personajes')
  };
  
  return (
    <>
      {dataPersonajes.personajes.map((personaje) => (
        <View key={personaje._id} style={styles.cardContainer}>
          <Text style={styles.titulo}>{personaje.nombre}</Text>
          <Text style={styles.subtitulo}>Sexo: {personaje.sexo}</Text>
          <Text style={styles.subtitulo}>Especie: {personaje.especie}</Text>
          <Text style={styles.subtitulo}>Ocupacion: {personaje.ocupacion}</Text>
          <Text style={styles.subtitulo}>Reino: {personaje.reino}</Text>

          <View>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },
              ]}
              onPress={() => navigation.navigate("ActPerso",{personaje:personaje})}
            >
              <Text style={styles.buttonText}>Actualizar</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },]}
              onPress={ () => handleEliminar(personaje._id) }>
              <Text style={styles.buttonText}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    width: 180,
    padding: 10,
    marginTop: 10,
    backgroundColor: "#a29bfe",
    height: 230,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
  },
  titulo: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    marginTop: 2,
    textAlign: "justify",
    fontSize: 15,
    color: "#000",
    marginBottom: 5,
  },
  button: {
    marginBottom:4,
    backgroundColor: "#BF0960",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
