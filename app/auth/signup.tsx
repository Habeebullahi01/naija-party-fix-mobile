import AuthLink from "@/components/AuthLink";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text
        style={{
          marginTop: "20%",
          marginBottom: 20,
          fontWeight: "500",
          color: "#7C7A87",
          fontSize: 18,
        }}
      >
        Create an Account
      </Text>
      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="First Name"
          style={{
            backgroundColor: "#D9D9D9",
            width: "45%",
            height: 45,
            paddingHorizontal: 8,
            marginVertical: 20,
            flexWrap: "wrap",
          }}
          inputMode="text"
        />

        <TextInput
          placeholder="Last Name"
          style={{
            backgroundColor: "#D9D9D9",
            width: "45%",
            height: 45,
            paddingHorizontal: 8,
            marginVertical: 20,
          }}
          inputMode="text"
        />
      </View>
      <TextInput
        placeholder="Email"
        style={{
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: 45,
          paddingHorizontal: 8,
          marginVertical: 20,
        }}
        inputMode="email"
      />

      <TextInput
        placeholder="Phone Number"
        style={{
          backgroundColor: "#D9D9D9",
          width: "100%",
          height: 45,
          paddingHorizontal: 8,
          marginVertical: 20,
        }}
        inputMode="tel"
        keyboardType="phone-pad"
      />
      <TextInput
        placeholder="Enter Password"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          paddingHorizontal: 8,
          marginVertical: 20,
        }}
        inputMode="text"
        secureTextEntry={showPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          paddingHorizontal: 8,
          marginVertical: 20,
        }}
        inputMode="text"
        secureTextEntry={showPassword}
        autoCorrect={false}
      />
      {/* <View
        onTouchEnd={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? (
          <MaterialCommunityIcons name="eye" />
        ) : (
          <MaterialCommunityIcons name="eye-off" />
        )}
      </View> */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="check-circle"
          style={{ color: "#7C7A87", marginRight: 8 }}
        />
        <Text
          style={{
            color: "#7C7A87",
          }}
        >
          Verify you are human.
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <MaterialCommunityIcons
          name="check-circle"
          style={{ color: "#7C7A87", marginRight: 8 }}
        />
        <Text
          style={{
            color: "#7C7A87",
          }}
        >
          Agree to terms and conditions.
        </Text>
      </View>

      <AuthLink href={"/"} title={"Create Account"} customWidth={"100%"} />
      <Text style={{ marginHorizontal: "auto" }}>
        Already have an account?{" "}
        <Link href={"/auth/login"} asChild>
          <Text style={{ textDecorationLine: "underline", fontWeight: 500 }}>
            Login
          </Text>
        </Link>
        {/* <AuthLink href={"/"} title={"Sign Up"} /> */}
      </Text>
    </SafeAreaView>
  );
}
