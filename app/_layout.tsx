import '@/assets/css/global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { Appearance, View } from 'react-native';
// @ts-ignore
import * as NW from 'nativewind';

export const unstable_settings = {
  anchor: '(tabs)',
};

export const themes = {
  light: NW.vars({
    '--color-foreground': '0 0 0',
    '--color-background': '200 200 200',
  }),
  dark: NW.vars({
    '--color-foreground': '255 255 255',
    '--color-background': '100 100 30',
  }),
};
 
export function Theme(props: { name: keyof typeof themes, children: React.ReactNode }) {
  const colorScheme = useColorScheme() || 'light';
  return (
    // <View className={cn("flex-1 flex flex-col", colorScheme === 'dark' ? 'dark' : '')}>
    <View
      // style={{
      //   ...themes[colorScheme],
      //   'display': 'flex',
      //   'flexDirection': 'column',
      //   'flexGrow': 1,
      //   // backgroundColor: 'green',
      // }}
      className={cn("flex-1 flex flex-col", colorScheme === 'dark' ? 'dark' : '')}
    >
      {props.children}
      {/* <Text type="no" style={themes[colorScheme]} className='mt-20 bg-[--color-background]'>{JSON.stringify(themes[colorScheme])}</Text>
      <Button text="Test Button" onPress={() => {
        const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
        console.log(`Toggled color scheme to: ${newColorScheme}`);
        Appearance.setColorScheme(newColorScheme);
      }} /> */}
    </View>
  )
}


export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    console.log('RootLayout mounted', colorScheme);
    Appearance.setColorScheme('dark');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <View className={cn("flex-1 flex flex-col", colorScheme === 'dark' ? 'dark' : '')}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        {/* <Theme name="dark"> */}
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        {/* </Theme> */}
      </ThemeProvider>
    // </View>
  );
}
