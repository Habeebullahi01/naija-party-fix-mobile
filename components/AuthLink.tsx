import { Link, type LinkProps } from "expo-router";
import { DimensionValue, Pressable, Text } from "react-native";

type AuthLinkProps = LinkProps & {
  title: String;
  customWidth?: DimensionValue;
};

export default function AuthLink(props: AuthLinkProps) {
  let w: DimensionValue;
  if (props.customWidth) {
    w = props.customWidth;
  } else {
    w = 50;
  }
  return (
    <Link href={props.href} asChild>
      <Pressable
        style={{
          backgroundColor: "#c1121f",
          padding: 4,
          borderRadius: 20,
          //   marginTop: 135,
          width: w,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#ffffff",
            // fontWeight: "bold",
            fontSize: 10,
          }}
        >
          {props.title.toLocaleUpperCase()}
        </Text>
      </Pressable>
    </Link>
  );
}
