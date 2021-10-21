import React from "react";
import { Home } from "./src/screens/Home";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar style="light"/>
    <Home />
    </>
  );
}
