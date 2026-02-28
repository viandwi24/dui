import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { OutlineIconButton } from "./button";
import { View } from "./view";

export interface ExpoRouterTabBarProps extends BottomTabBarProps {
  type?: "outline_icon" | "label";
}

export function ExpoRouterTabBar(props: ExpoRouterTabBarProps) {
  const inset = useSafeAreaInsets();

  return (
    <View
      className="h-25 flex flex-row justify-center gap-4 items-center border-t bg-gray-50 border-gray-200 dark:bg-gray-950 dark:border-gray-900"
      style={{ paddingBottom: inset.bottom / 1.5 }}
    >
      {props.state.routes.map((route, index) => {
        const isActive = props.state.index === index;
        const options = props.descriptors[route.key].options;
        return (
          <View key={route.key} className="flex flex-row items-center gap-2">
            <OutlineIconButton
              icon={
                options.tabBarIcon
                  ? options.tabBarIcon({
                      focused: isActive,
                      color: isActive ? "rgba(84.843, 161.84, 255)" : "gray",
                      size: 20,
                    })
                  : undefined
              }
              color={isActive ? "primary" : "transparent"}
              // text={props.descriptors[route.key].options.title}
              // text={`${props.state.index}-${index} (${props.state.index === index ? 'active' : 'inactive'})`}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              onPress={() => {
                props.navigation.navigate(route.name);
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
