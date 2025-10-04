import { Button, Icon, OutlineIconButton, Text, View } from "@/components/ui";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ComponentsScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top }} className="flex-1 p-4">
      <ScrollView>
        <View className="flex flex-col gap-6">
          <Text type="title">Components</Text>
          <View className="flex flex-col gap-4">
            <Text type="h2">Buttons</Text>
            <Button text="Default" />
            <Button color="danger" text="Danger" />
          </View>
          <View className="flex flex-col gap-4">
            <Text type="h2">Outline Icon Buttons</Text>
            <OutlineIconButton text="Default" />
            <View className="flex flex-row gap-2">
              <OutlineIconButton icon={<Icon name="ph:gear" color="blue" />} />
              <OutlineIconButton
                icon={<Icon name="ph:gear" />}
                text="With Text"
              />
            </View>
          </View>
          <View className="flex flex-col gap-4">
            <Text type="h2">Switch</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}