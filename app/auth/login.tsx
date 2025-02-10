import AuthLink from "@/components/AuthLink";
import { Link } from "expo-router";
import { SafeAreaView, Text, TextInput } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Text
        style={{
          marginTop: "20%",
          marginBottom: 20,
          fontWeight: "500",
          color: "#7C7A87",
        }}
      >
        Your dream event begins here
      </Text>
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
        placeholder="Password"
        style={{
          backgroundColor: "#D9D9D9",
          width: "80%",
          height: 45,
          padding: 4,
          marginVertical: 20,
        }}
        inputMode="email"
      />
      <AuthLink href={"/"} title={"Login"} />
      <Text>
        Don't have an account?{" "}
        <Link href={"/auth/signup"} asChild>
          <Text style={{ textDecorationLine: "underline", fontWeight: 500 }}>
            Sign up
          </Text>
        </Link>
        {/* <AuthLink href={"/"} title={"Sign Up"} /> */}
      </Text>
    </SafeAreaView>
  );
}
