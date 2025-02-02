import { LinearGradient } from "expo-linear-gradient";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { Link } from "expo-router";
// import im from "@/assets/images/home-wedding.png";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 8,
        // backgroundColor: "#713266",
        // backgroundImage: "linear-gradient( #A54A95, #3F1C39)",
      }}
    >
      <LinearGradient
        colors={["#A54A95", "#3F1C39"]}
        style={styles.background}
      ></LinearGradient>

      <Text style={[styles.title, { marginTop: 80, marginBottom: 25 }]}>
        NaijaPartyFix
      </Text>
      <Image
        source={require("@/assets/images/home-wedding.png")}
        style={[styles.image, {}]}
        contentFit="contain"
      />
      <Text
        style={[
          styles.title,
          {
            marginTop: 13,
            marginBottom: 35,
            textAlign: "center",
            width: "50%",
          },
        ]}
      >
        Plan Your Events Easily
      </Text>
      <Text style={styles.text}>Now you dont have to search individually.</Text>
      <Text style={styles.text}>All in just one platform.</Text>
      {/* <Button title="Get Started" /> */}
      <Link href={"/auth"} asChild>
        <Pressable
          style={{
            backgroundColor: "#D14D57",
            padding: 4,
            borderRadius: 20,
            marginTop: 135,
            width: 134,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: 10,
            }}
          >
            Get Started
          </Text>
        </Pressable>
      </Link>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  image: {
    // flex: 1,
    width: 268,
    height: 259,
    // backgroundColor: "#0553",
  },
  text: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 10,
  },
});
