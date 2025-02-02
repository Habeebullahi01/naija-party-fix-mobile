import AuthButton from "@/components/AuthButton";
import AuthLink from "@/components/AuthLink";
import { PurpleView } from "@/components/PurpleView";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Let's Get Started</Text>
      <Image
        source={require("@/assets/images/auth-home.png")}
        contentFit="contain"
        style={{ width: 289, height: 253 }}
      />
      <View style={{ marginTop: 24 }}>
        <AuthButton name={"Google"} icon={<Ionicons name="logo-google" />} />
        <AuthButton
          name={"Facebook"}
          icon={<MaterialIcons name="facebook" />}
        />
      </View>
      <View
        style={{
          marginTop: 135,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <AuthLink title={"Sign Up"} href={"/"} />
        <AuthLink title={"Login"} href={"/auth/login"} />
      </View>
    </SafeAreaView>
  );
}
