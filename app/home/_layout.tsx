import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { Drawer, useTheme } from "react-native-paper";
import HomeScreen from ".";
import VendorScreen from "./vendors";
import PlannerScreen from "./planner";

function DrawerContent(props: DrawerContentComponentProps) {
  const theme = useTheme();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        backgroundColor: theme.colors.secondaryContainer,
        height: "100%",
      }}
      {...props}
    >
      <Drawer.Item
        label="Home"
        // style={{ backgroundColor: "#C1121F" }}
        // icon={"home"}
        // active
        onPress={() => props.navigation.navigate("Home")}
      />
      <Drawer.Item
        label="Vendors"
        // style={{ backgroundColor: "#C1121F" }}
        // icon={"home"}
        onPress={() => props.navigation.navigate("Vendors")}
      />

      <Drawer.Item
        label="Planner"
        // style={{ backgroundColor: "#C1121F" }}
        // icon={"home"}
        onPress={() => props.navigation.navigate("Planner")}
      />
      <Drawer.Item
        label="Active Event"
        // style={{ backgroundColor: "#C1121F" }}
        // icon={"home"}
      />
      <Drawer.Item
        label="Event Diary"
        // style={{ backgroundColor: "#C1121F" }}
        // icon={"home"}
      />
    </View>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

export default function HomeLayout() {
  const DrawerNavigator = createDrawerNavigator();
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#9B468C",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          textAlign: "center",
          fontSize: 10,
          color: "white",
        },
        headerTitleAlign: "center",
      }}
      drawerContent={(props) => {
        return <DrawerContent {...props} />;
      }}
    >
      <DrawerNavigator.Screen name="Home" component={HomeScreen} />
      <DrawerNavigator.Screen
        name="Vendors"
        component={VendorScreen}
        options={{ title: "View Vendors" }}
      />
      <DrawerNavigator.Screen name="Planner" component={PlannerScreen} />
    </DrawerNavigator.Navigator>
  );
}
