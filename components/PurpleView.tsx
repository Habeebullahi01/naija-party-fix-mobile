import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, type ViewProps } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export function PurpleView({ style, ...props }: ViewProps) {
  return (
    <SafeAreaView style={[style, { flex: 1 }]} {...props}>
      <LinearGradient
        colors={["#A54A95", "#3F1C39"]}
        style={styles.background}
      ></LinearGradient>
      {props.children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "110%",
  },
});
