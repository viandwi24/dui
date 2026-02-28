import {
  Button,
  Card,
  CardHeader,
  SafeAreaScreen,
  Text,
  View,
} from "@/components/ui";

export default function FeedsScreen() {
  return (
    <SafeAreaScreen bottom={false} title="Feeds">
      <View className="p-4 flex flex-col gap-6">
        <View className="bg-primary min-h-45 rounded-2xl overflow-hidden p-4">
          <Text className="font-bold text-3xl w-56">
            Tambahkan teman dan dapatkan pengalaman seutuhnya!
          </Text>
          <View className="mt-4">
            <Button color="white" text="Find Friends" />
          </View>
        </View>
        {Array.from({ length: 10 }).map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Text className="text-2xl font-bold">Feed Item {i + 1}</Text>
            </CardHeader>
            <Text>
              This is the content of feed item {i + 1}. It can contain text,
              images, or any other content you want to display in the feed.
            </Text>
          </Card>
        ))}
      </View>
    </SafeAreaScreen>
  );
}
