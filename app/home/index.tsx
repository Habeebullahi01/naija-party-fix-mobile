import { Image } from "expo-image";
import * as React from "react";
import { Text, View } from "react-native";
import { DrawerLayout } from "react-native-gesture-handler";
import { ActivityIndicator, Drawer } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "space-between",
        // height: "100%",
      }}
    >
      <View>
        <Image
          source={require("@/assets/images/concert.png")}
          style={{ width: 254, height: 248 }}
        />
      </View>
      <View style={{ width: "80%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // width: "100%",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>User Reviews</Text>
          <Text>View all</Text>
        </View>
        <View
          style={{ padding: 20, backgroundColor: "#EDEEF0", borderRadius: 15 }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 9,
              fontWeight: "light",
              color: "#2C2C2C",
            }}
          >
            Ease of planning has been worrisome for me, but I can do this all
            the way
          </Text>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            Linay Okoye
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
