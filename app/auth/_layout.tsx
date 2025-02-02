import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, headerTintColor: "#E12E69" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
