### 🧩 **Context**

This application is built using **Expo React Native** with **expo-router** for navigation.  
It uses **NativeWind v5 (alpha/beta preview)** — which is based on **TailwindCSS v4** — and is written in **TypeScript**.  
The project is compiled and managed with **Bun**.

All **UI components** are designed based on or inspired by the **Duolingo** app, featuring a **minimalist, cartoonish, and playful** design style.  
These components are located in the `components/ui` directory.

---

### 🎨 **Component Guidelines**

- Before creating a new component, determine whether it should be **reusable**.  
- If it’s a reusable **UI-related** component (e.g., `Card`, `Button`, `Modal`, `Input`, `FormControl`, etc.), place it under `components/ui`.  
  - These components should be similar to those found in UI kits like **shadcn** or **Radix**.  
- If the required component doesn’t exist yet, you may **create a new one** using:
  - `class-variance-authority` for variant handling.
  - `cn` from `@/lib/utils` for class name merging.  
- Always ensure that the **visual style** matches **Duolingo’s design language**.