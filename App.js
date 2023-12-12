import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { inicioScreen } from "./screens/incioScreen";
import { reinosScreen } from "./screens/reinosScreen";
import { personajesScreen } from "./screens/personajesScreen";
import { actReinoScreen } from "./screens/actReinoScreen";
import { actPersoScreen } from "./screens/actPersoScreen";
import { vistasBotonesScreen } from "./screens/vistasBotonesScreen";
import { agreReinoScreen } from "./screens/agreReinoScreen";
import { agrePersoScreen } from "./screens/agrePersoScreen";
import { CardReino } from "./screens/cardReino";
import { CardPerso } from "./screens/cardPerso";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#BF0960' } }}>
        <Stack.Screen  name="Inicio" component={inicioScreen} />
        <Stack.Screen name="vistasBotones" component={vistasBotonesScreen} />
        <Stack.Screen name="Reinos" component={reinosScreen} />
        <Stack.Screen name="Personajes" component={personajesScreen} />
        <Stack.Screen name="AgreReinoScreen" component={agreReinoScreen} />
        <Stack.Screen name="AgrePersoScreen" component={agrePersoScreen} />
        <Stack.Screen name="ActReino" component={actReinoScreen} />
        <Stack.Screen name="ActPerso" component={actPersoScreen} />
        <Stack.Screen name="card" component={CardReino} />
        <Stack.Screen name="cardp" component={CardPerso} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
