import { SafeAreaScreen, Text, View } from "@/components/ui";

export default function FeedsScreen() {
  return (
    <SafeAreaScreen bottom={false} title="Feeds">
      <View className="flex flex-col items-center gap-4 bg-red-500 mt-4">
        <Text className="text-2xl font-bold mb-4">Feeds</Text>
        <Text className="text-foreground text-lg">
          This is the Feeds tab. You can display your feed content here.
        </Text>
        <Text className="text-2xl font-bold mb-4">Welcome to Dui!</Text>
      </View>
      {Array.from({ length: 20 }).map((_, i) => (
        <View
          key={i}
          className="flex flex-row items-center gap-4 bg-background rounded-lg p-4 shadow-md"
        >
          <View className="h-12 w-12 bg-primary rounded-full" />
          <View>
            <Text className="font-bold">Feed Item {i + 1}</Text>
            <Text className="text-muted">
              This is a description of feed item {i + 1}.
            </Text>
          </View>
        </View>
      ))}
    </SafeAreaScreen>
  );
}
