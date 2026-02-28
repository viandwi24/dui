import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Icon,
  OutlineButton,
  OutlineIconButton,
  SafeAreaScreen,
  Switch,
  Text,
  View,
} from "@/components/ui";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useCallback, useState } from "react";
import { Appearance } from "react-native";

export default function ComponentsScreen() {
  const colorScheme = useColorScheme();

  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [primarySwitch, setPrimarySwitch] = useState(false);
  const [successSwitch, setSuccessSwitch] = useState(false);
  const [dangerSwitch, setDangerSwitch] = useState(false);

  const toggleColorScheme = useCallback(() => {
    const newColorScheme = colorScheme === "light" ? "dark" : "light";
    // Assuming you have a method to set the color scheme in your app's context or state
    // setColorScheme(newColorScheme);
    console.log(`Toggled color scheme to: ${newColorScheme}`);
    Appearance.setColorScheme(newColorScheme);
  }, [colorScheme]);

  return (
    <SafeAreaScreen bottom={false} title="Components">
      <View className="flex flex-col gap-6 p-4">
        <View className="flex flex-col gap-4">
          <Text type="h2">Theme</Text>
          <Switch
            checked={colorScheme === "dark"}
            onCheckedChange={toggleColorScheme}
          />
        </View>
        <View className="flex flex-col gap-4">
          <Text type="h2">Buttons</Text>
          <Button text="Default" />
          <Button color="secondary" text="Secondary" />
          <Button color="primary" text="Primary" />
          <Button color="success" text="Success" />
          <Button color="danger" text="Danger" />
        </View>
        <View className="flex flex-col gap-4">
          <Text type="h2">Buttons Outline</Text>
          <OutlineButton text="Default" />
          <OutlineButton color="secondary" text="Secondary" />
          <OutlineButton color="primary" text="Primary" />
          <OutlineButton color="success" text="Success" />
          <OutlineButton color="danger" text="Danger" />
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
          <Text type="h2">Card</Text>
          <Card>
            <CardHeader>
              <Text type="h2">Default Card</Text>
            </CardHeader>
            <CardContent>
              <Text>This is a default card with some content inside.</Text>
            </CardContent>
          </Card>
          <Card variant="outlined">
            <CardHeader>
              <Text type="h2">Outlined Card</Text>
            </CardHeader>
            <CardContent>
              <Text>This card has an outlined blue border.</Text>
            </CardContent>
          </Card>
          <Card variant="success">
            <CardHeader>
              <Text type="h2">Success Card</Text>
            </CardHeader>
            <CardContent>
              <Text>This card indicates a successful state.</Text>
            </CardContent>
          </Card>
          <Card variant="warning">
            <CardHeader>
              <Text type="h2">Warning Card</Text>
            </CardHeader>
            <CardContent>
              <Text>This card indicates a warning state.</Text>
            </CardContent>
          </Card>
          <Card variant="danger">
            <CardHeader>
              <Text type="h2">Danger Card</Text>
            </CardHeader>
            <CardContent>
              <Text>This card indicates a danger state.</Text>
            </CardContent>
          </Card>
        </View>
        <View className="flex flex-col gap-4">
          <Text type="h2">Switch</Text>
          <View className="flex flex-col gap-3">
            <View className="flex flex-row items-center justify-between">
              <Text>Default Switch</Text>
              <Switch
                checked={switchEnabled}
                onCheckedChange={setSwitchEnabled}
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text>Primary Switch</Text>
              <Switch
                color="primary"
                checked={primarySwitch}
                onCheckedChange={setPrimarySwitch}
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text>Success Switch</Text>
              <Switch
                color="success"
                checked={successSwitch}
                onCheckedChange={setSuccessSwitch}
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text>Danger Switch</Text>
              <Switch
                color="danger"
                checked={dangerSwitch}
                onCheckedChange={setDangerSwitch}
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text>Small Switch</Text>
              <Switch
                size="sm"
                checked={switchEnabled}
                onCheckedChange={setSwitchEnabled}
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <Text>Large Switch</Text>
              <Switch
                size="lg"
                checked={switchEnabled}
                onCheckedChange={setSwitchEnabled}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaScreen>
  );
}
