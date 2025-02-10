import { MaterialIcons } from "@expo/vector-icons";
import { ComponentClass, ReactElement } from "react";
import { Text, View } from "react-native";

type AuthButtonProps = {
  name: String;
  icon: ReactElement;
};
export default function AuthButton({ name, icon }: AuthButtonProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "flex-start",
        gap: 12,
        borderColor: "#C1121F",
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        width: "80%",
      }}
    >
      {icon}
      <Text style={{ color: "#7C7A87" }}>Connect with {name}</Text>;
    </View>
  );
}
