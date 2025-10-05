import { Button, Icon, OutlineIconButton, ScrollView, Switch, Text, View } from "@/components/ui";
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useCallback, useState } from "react";
import { Appearance } from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ComponentsScreen() {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  const [switchEnabled, setSwitchEnabled] = useState(false);
  const [primarySwitch, setPrimarySwitch] = useState(false);
  const [successSwitch, setSuccessSwitch] = useState(false);
  const [dangerSwitch, setDangerSwitch] = useState(false);

  const toggleColorScheme = useCallback(() => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    // Assuming you have a method to set the color scheme in your app's context or state
    // setColorScheme(newColorScheme);
    console.log(`Toggled color scheme to: ${newColorScheme}`);
    Appearance.setColorScheme(newColorScheme);
  }, [colorScheme]);

  return (
    <View style={{ paddingTop: insets.top }} className="flex-1">
      <ScrollView className="p-4">
        <View className="flex flex-col gap-6">
          <Text type="title">Components</Text>
          <View className="flex flex-col gap-4">
            <Text type="h2">Theme</Text>
            <Switch
              checked={colorScheme === 'dark'}
              onCheckedChange={toggleColorScheme}
            />
          </View>
          <View className="flex flex-col gap-4">
            <Text type="h2">Buttons</Text>
            <Button text="Default" />
            <Button color="primary" text="Primary" />
            <Button color="success" text="Success" />
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
      </ScrollView>
    </View>
  );
}