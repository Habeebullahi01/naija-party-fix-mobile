import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "expo-router";
import {
  configureFonts,
  MD3LightTheme,
  PaperProvider,
} from "react-native-paper";

export default function RootLayout() {
  const fontConfig = {
    fontFamily: "Poppins",
  };
  const customTheme = {
    ...MD3LightTheme,
    fonts: configureFonts({ config: fontConfig }),
    colors: {
      ...MD3LightTheme.colors,
      primary: "#9B468C",
      secondary: "#C1121F",
    },
    customColor: {
      custom: "#C1121F",
    },
  };
  // console.log("Root is used!");
  return (
    <PaperProvider theme={customTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="index" /> */}
        {/* <Stack.Screen name="auth" /> */}
      </Stack>
    </PaperProvider>
  );
}
