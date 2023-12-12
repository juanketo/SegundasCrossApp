import React, { useEffect, useState } from "react";
import { StatusBar, ImageBackground, StyleSheet, Text, Pressable, View, TextInput, } from "react-native";
import { adventureapi } from "../api/adventureapi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const actReinoScreen = ({route,navigation}) => {

  const [reinoData, setreinoData] = useState({
    ok: false,
    msg: 'nel perro',
    reino: [],
  })

  
  const { ok } = reinoData;
  
  const [form, setForm] = useState();
  
  const { reino } = route.params;
  
  const { nombre, tipo, gobernante, ubicacion, _id } = reino;
  // console.log(_id);
  
  useEffect(() => {
    setForm({
      nombre: ok? nombre: '',
      tipo: ok? tipo: '',
      gobernante: ok? gobernante: '',
      ubicacion: ok? ubicacion: '',
    })
  }, [ok])
  
  useEffect(() => {
   const httpRequest = adventureapi.get(`/reinos/busqueda/${_id}`)
   httpRequest.then(resp => setreinoData(resp.data))
  }, [])
  

  const handleUpdate = async () => {
    if(form.nombre === "" || form.tipo === "" || form.gobernante === ""|| form.ubicacion === ""){
      console.log("llena los campos tonto");
    }else{
      await adventureapi.put(`/reinos/${reino._id}`, form);
      setForm({
        nombre: "",
        tipo: "",
        gobernante: "",
        ubicacion: "",
      });
       navigation.push("Reinos");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/reinosf.png")}
      style={styles.backgroundImage}>
      {reinoData.ok && (
        <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.titulo}>Actualizar Reino</Text>
          <View>
            <Text style={styles.subtitulo}>Nombre</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, nombre: value })}
              value={form.nombre}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>tipo</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, tipo: value })}
              value={form.tipo}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>Gobernante</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, gobernante: value })}
              value={form.gobernante}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>Ubicacion</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, ubicacion: value })}
              value={form.ubicacion}
              style={styles.cps}
            ></TextInput>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },
              ]}
              onPress={handleUpdate}>
              <Text style={styles.buttonText}>Actualizado</Text>
            </Pressable>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
      )}
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
  cps: {
    paddingStart: 20,
    padding: 10,
    width: 300,
    height: 40,
    marginLeft: 10,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
  },
});
