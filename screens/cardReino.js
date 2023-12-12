import * as React from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { adventureapi } from "../api/adventureapi";
import { useEffect, useState } from "react";

export const CardReino = ({ navigation }) => {
  const [dataReinos, setDataReinos] = useState({
    ok: false,
    msg: "",
    reinos: [],
  });

  const mostrarListaReinos = async () => {
    const httpRequest = adventureapi.get("/reinos");
    httpRequest.then((response) => {
      setDataReinos({
        loading: true,
        reinos: response.data.reinos,
      });
    });
  };

  useEffect(() => {
    mostrarListaReinos();
  }, []);


  const handleEliminar = (id) => {
    adventureapi.delete(`/reinos/${id}`);
    navigation.push('Reinos')
  };



  return (
    <>
      {dataReinos.reinos.map((reino) => (
        <View key={reino._id} style={styles.cardContainer}>
          <Text style={styles.titulo}>{reino.nombre}</Text>
          <Text style={styles.subtitulo}>Tipo: {reino.tipo}</Text>
          <Text style={styles.subtitulo}>Gobernante: {reino.gobernante}</Text>
          <Text style={styles.subtitulo}>Ubicacion: {reino.ubicacion}</Text>
          <View style={styles.container}>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },
              ]}
              onPress={() => navigation.navigate("ActReino",{reino:reino})}
            >
              <Text style={styles.buttonText}>Actualizar</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },]}
              onPress={ () => handleEliminar(reino._id)}>
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
