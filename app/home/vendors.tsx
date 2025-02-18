import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VendorScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Vendor Screen</Text>
    </SafeAreaView>
  );
}
