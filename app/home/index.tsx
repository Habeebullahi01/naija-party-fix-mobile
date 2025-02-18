import * as React from "react";
import { Text } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";
import { ActivityIndicator, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>This is the home page</Text>
      <Drawer.Section>
        <Text>This</Text>
      </Drawer.Section>
    </SafeAreaView>
  );
}
