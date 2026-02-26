import { Text, View } from "@/components/ui";
import { useRouter } from "expo-router";
import { Appearance, TouchableHighlight, useColorScheme } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold mb-4">Welcome to Dui!</Text>
      <Text className="text-foreground text-lg">Theme: {colorScheme}</Text>
      <Text className="text-foreground">Foreground Text</Text>
      <Text className="text-primary">Primary Text (blue)</Text>
      <Text className="text-secondary">Secondary Text (purple)</Text>
      <Text className="text-muted">Muted Text (gray)</Text>

      <View className="flex-row gap-3 mt-4">
        <View className="h-12 w-12 border border-black dark:border-white rounded-lg bg-primary" />
        <View className="h-12 w-12 border border-black dark:border-white rounded-lg bg-secondary" />
        <View className="h-12 w-12 border border-black dark:border-white rounded-lg bg-muted" />
        <View className="h-12 w-12 border border-black dark:border-white rounded-lg bg-background" />
        <View className="h-12 w-12 border border-black dark:border-white rounded-lg bg-foreground" />
      </View>

      <TouchableHighlight
        className="mt-6 px-6 py-3 rounded-lg bg-primary"
        onPress={() =>
          Appearance.setColorScheme(colorScheme === "light" ? "dark" : "light")
        }
      >
        <Text className="text-background font-bold">Change theme</Text>
      </TouchableHighlight>

      <TouchableHighlight
        className="mt-6 px-6 py-3 rounded-lg bg-primary"
        onPress={() => router.replace("/")}
      >
        <Text className="text-background font-bold">back to home</Text>
      </TouchableHighlight>
    </View>
  );
}
