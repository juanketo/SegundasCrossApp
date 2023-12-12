import React, { useEffect, useState } from "react";
import { StatusBar, ImageBackground, StyleSheet, Text, Pressable, View, TextInput, } from "react-native";
import { adventureapi } from "../api/adventureapi";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const actPersoScreen = ({route,navigation}) => {

  const [persoData, setpersoData] = useState({
    ok: false,
    msg: 'nel perro',
    personaje: [],
  })

  
  const { ok } = persoData;
  
  const [form, setForm] = useState();
  
  const { personaje } = route.params;
  
  const { nombre, sexo, especie, ocupacion, reino, _id } = personaje;
  
  useEffect(() => {
    setForm({
      nombre: ok? nombre: '',
      sexo: ok? sexo: '',
      especie: ok? especie: '',
      ocupacion: ok? ocupacion: '',
      reino: ok? reino: '',
    })
  }, [ok])
  
  useEffect(() => {
   const httpRequest = adventureapi.get(`/personajes/busqueda/${_id}`)
   httpRequest.then(resp => setpersoData(resp.data))
  }, [])
  

  const handleUpdate = async () => {
    if(form.nombre === "" || form.sexo === "" || form.especie === ""|| form.ocupacion === ""|| form.reino === ""){
      console.log("llena los campos tonto");
    }else{
      await adventureapi.put(`/personajes/${personaje._id}`, form);
      setForm({
        nombre: "",
        sexo: "",
        especie: "",
        ocupacion: "",
        reino: "",
      });
       navigation.push("Personajes");
    }
  };

  return (
    <ImageBackground
      source={require("../assets/repe.png")}
      style={styles.backgroundImage}
    >
      {persoData.ok && (
        <View style={styles.mainContainer}>
        <View style={styles.container}>
            <Text style={styles.subtitulo}>Nombre</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, nombre: value })}
              value={form.nombre}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>sexo</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, sexo: value })}
              value={form.sexo}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>especie</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, especie: value })}
              value={form.especie}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>ocupacion</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, ocupacion: value })}
              value={form.ocupacion}
              style={styles.cps}
            ></TextInput>
            <Text style={styles.subtitulo}>reino</Text>
            <TextInput
              onChangeText={(value) => setForm({ ...form, reino: value })}
              value={form.reino}
              style={styles.cps}
            ></TextInput>
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? "#800040" : "#BF0960" },
              ]}
              onPress={handleUpdate}
            >
              <Text style={styles.buttonText}>Actualizado</Text>
            </Pressable>
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
    color: "#fff",
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
