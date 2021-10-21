import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Message } from "../Message";

export function MessageList() {
  return (
    <View style={styles.container}>
        <Message />
    </View>
  );
}