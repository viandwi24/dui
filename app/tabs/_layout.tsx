import { Tabs } from "expo-router";
import React from "react";

import { ExpoRouterTabBar, Icon } from "@/components/ui";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      tabBar={(props) => <ExpoRouterTabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            // <View>
            //   <Text>wae</Text>
            // </View>
            <Icon
              name={focused ? "ph:house-fill" : "ph:house-duotone"}
              size={20}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: "Components",
          tabBarIcon: ({ color, focused }) => (
            // <View>
            //   <Text>wae</Text>
            // </View>
            <Icon
              name={focused ? "ph:package-fill" : "ph:package-duotone"}
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
