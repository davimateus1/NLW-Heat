import React from "react";
import { Text, View } from "react-native";
import { UserPhoto } from "../UserPhoto";
import { styles } from "./styles";

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>
      
      <View style={styles.footer}>
        <UserPhoto 
        sizes="SMALL" 
        imageUri="https://github.com/davimateus1.png" 
        />

        <Text style={styles.userName}>
            Nome do usuario
        </Text>
      </View>
    </View>
  );
}
