import { Link, type LinkProps } from "expo-router";
import { Pressable, Text } from "react-native";

type AuthLinkProps = LinkProps & {
  title: String;
};

export default function AuthLink(props: AuthLinkProps) {
  return (
    <Link href={props.href} asChild>
      <Pressable
        style={{
          backgroundColor: "#D14D57",
          padding: 4,
          borderRadius: 20,
          //   marginTop: 135,
          width: 50,
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
          {props.title}
        </Text>
      </Pressable>
    </Link>
  );
}
