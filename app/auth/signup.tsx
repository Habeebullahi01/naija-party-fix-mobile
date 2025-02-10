import AuthLink from "@/components/AuthLink";
import { Link } from "expo-router";
import { SafeAreaView, Text, TextInput, View } from "react-native";

export default function Signup() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          marginTop: "20%",
          marginBottom: 20,
          fontWeight: "500",
          color: "#7C7A87",
        }}
      >
        Create an Account
      </Text>
      <View
        style={{
          flexDirection: "row",

          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          placeholder="First Name"
          style={{
            backgroundColor: "#D9D9D9",
            width: "40%",
            height: 45,
            padding: 4,
            marginVertical: 20,
            flexWrap: "wrap",
          }}
          inputMode="text"
        />

        <TextInput
          placeholder="Last Name"
          style={{
            backgroundColor: "#D9D9D9",
            width: "40%",
            height: 45,
            padding: 4,
            marginVertical: 20,
          }}
          inputMode="text"
        />
      </View>
      <TextInput
        placeholder="Email"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          padding: 4,
          marginVertical: 20,
        }}
        inputMode="email"
      />

      <TextInput
        placeholder="Phone Number"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          padding: 4,
          marginVertical: 20,
        }}
        inputMode="tel"
      />
      <TextInput
        placeholder="Enter Password"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          padding: 4,
          marginVertical: 20,
        }}
        inputMode="text"
      />
      <TextInput
        placeholder="Confirm Password"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          padding: 4,
          marginVertical: 20,
        }}
        inputMode="text"
      />
      <AuthLink href={"/"} title={"Sign Up"} />
      <Text>
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
