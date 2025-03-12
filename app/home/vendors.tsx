import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme, Text } from "react-native-paper";
import * as d from "@/enums/vendors.json";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

export default function VendorScreen() {
  const theme = useTheme();
  const [category, setCategory] = useState("all");
  return (
    <SafeAreaView
      style={{
        // flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.primary,
      }}
    >
      <Picker
        selectedValue={category}
        onValueChange={(val) => {
          setCategory(val);
        }}
      >
        <Picker.Item label="All" value={"all"} />
        <Picker.Item label="Catering" value={"catering"} />
        <Picker.Item label="Decoration" value={"decoration"} />
      </Picker>
      {/* <ScrollView> */}
      <VendorList category={category} />
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}
type VendorListProp = {
  category: String;
};

const VendorList = (p: VendorListProp) => {
  const theme = useTheme();
  let vendorData = d.data;
  if (p.category != "all") {
    vendorData = vendorData.filter((v) => {
      return v.category.includes(p.category.toString());
    });
  }
  return (
    <View style={{ ...style.categorySection, marginVertical: 20 }}>
      <Text style={{ fontWeight: "bold" }}>
        {p.category.toUpperCase()} ({vendorData.length})
      </Text>
      <ScrollView>
        <View style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {vendorData.map((v, index) => {
            const RatingStars = () => {
              return (
                <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
                  {Array.from({ length: v.rating }, (_, idx) => (
                    <MaterialIcons
                      key={idx}
                      name="star-rate"
                      color={theme.colors.secondary}
                    />
                  ))}
                </View>
              );
            };

            return (
              <View // List item
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  ...style.listItem,
                }}
              >
                <View // item image
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "green",
                    ...style.itemImage,
                  }}
                ></View>
                <View // item text
                  style={{
                    ...style.itemText,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    justifyContent: "space-around",
                    // width: "80%",
                  }}
                >
                  <View // item header
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text variant="labelLarge" style={{ fontWeight: "bold" }}>
                      {v.name}
                    </Text>
                    <RatingStars />
                  </View>
                  <Text variant="bodyMedium">{v.description}</Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      textAlign: "right",
                      alignSelf: "flex-end",
                    }}
                  >
                    Add to Favorites
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const style = {
  categorySection: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
  },
  list: {},
  listItem: {},
  itemText: {},
  itemImage: {},
  vendorName: {},
};
