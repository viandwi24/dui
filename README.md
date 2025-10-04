# DUI
A UI inspired by Duolingo for React Native Expo apps.

## Dependencies
- [x] React Native Css
- [x] React Native Reanimated
- [x] React Native Safe Area Context
- [x] Nativewind v5 (pre-release)
- [x] Expo Router
- [x] Monicon

## Features
- [x] Theme support (light/dark)
- [x] 10+ Components ready to use, inspired by Duolingo
- [x] Variant support (solid, outline, etc.)
- [x] Fully typed with TypeScript
- [x] Icon Component with Monicon (iconify icons support)


## How Im Started
1. Install dependencies
```bash
bun install expo-haptics nativewind@preview react-native-css react-native-reanimated react-native-safe-area-context @monicon/native @monicon/metro react-native-svg @iconify-json/ph tailwind-merge clsx class-variance-authority
bun install --dev tailwindcss @tailwindcss/postcss postcss
```
2. Setup postcss.config.mjs to use tailwindcss
3. Setup metro.config.js, and add nativewind and monicon
```bash
bunx expo customize metro.config.js
```
4. Import `assets/css/global.css` in root layout
5. Setup `nativewind-env.d.ts ` for nativewind types


## Components
- [x] View (styled View)
- [x] Text (styled Text)
- [x] Expo Router Modifier `./components/ui/router.tsx`
  - TabBar (for Expo Router Tabs)
- [x] Icon (with Monicon)
- [x] Button
- [x] Card