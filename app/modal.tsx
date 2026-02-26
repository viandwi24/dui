import { Link } from "expo-router";
import { StyleSheet } from "react-native";

import { Text, View } from "@/components/ui";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text type="title">This is a modal</Text>
      <Link href="/" dismissTo style={styles.link}>
        <Text type="link">Go to home screen</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
