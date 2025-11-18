# CLAUDE.md - AI Assistant Guide for DUI

## Project Overview

**DUI** is a Duolingo-style UI component library built for React Native Expo applications. The project features a playful, minimalist, cartoonish design inspired by the Duolingo app, with 10+ ready-to-use components that support theming (light/dark modes) and are fully typed with TypeScript.

### Key Characteristics
- **Design Language**: Duolingo-inspired (minimalist, cartoonish, playful)
- **Primary Color**: Sky blue (see `assets/css/global.css`)
- **Platform**: React Native with Expo Router
- **Build Tool**: Bun (not npm/yarn)
- **Styling**: NativeWind v5 (alpha/preview) based on TailwindCSS v4

---

## Tech Stack

### Core Dependencies
- **React Native**: 0.81.4
- **React**: 19.1.0
- **Expo SDK**: ~54.0.12
- **Expo Router**: ~6.0.10 (file-based navigation)
- **TypeScript**: ~5.9.2 (strict mode enabled)

### Styling & UI
- **NativeWind**: v5.0.0-preview.1 (TailwindCSS for React Native)
- **TailwindCSS**: v4.1.14
- **class-variance-authority**: ^0.7.1 (for component variants)
- **tailwind-merge**: ^3.3.1 (merging Tailwind classes)
- **clsx**: ^2.1.1 (conditional class names)

### Additional Features
- **react-native-reanimated**: ^4.1.2 (animations)
- **react-native-safe-area-context**: ^5.6.1 (safe areas)
- **expo-haptics**: ^15.0.7 (haptic feedback)
- **@monicon/native**: ^1.2.2 (iconify icons support)
- **react-native-svg**: ^15.13.0 (SVG support)

---

## Directory Structure

```
dui/
├── app/                          # Expo Router pages (file-based routing)
│   ├── (tabs)/                   # Tab navigation group
│   │   ├── _layout.tsx          # Tab layout configuration
│   │   ├── index.tsx            # Home/index tab screen
│   │   └── components.tsx       # Components showcase tab
│   ├── _layout.tsx              # Root layout (theme provider, global CSS)
│   └── modal.tsx                # Example modal screen
│
├── components/
│   ├── ui/                      # Reusable UI components (Duolingo-style)
│   │   ├── index.tsx           # Barrel export file
│   │   ├── button.tsx          # Button with variants
│   │   ├── card.tsx            # Card component
│   │   ├── icon.tsx            # Icon wrapper for Monicon
│   │   ├── router.tsx          # Expo Router modifications (TabBar)
│   │   ├── switch.tsx          # Toggle switch
│   │   ├── text.tsx            # Styled Text component
│   │   └── view.tsx            # Styled View component
│   └── screen/                 # Screen-specific components
│       └── components.tsx      # Components screen content
│
├── constants/
│   └── theme.ts                # Color and font constants
│
├── hooks/
│   ├── use-color-scheme.ts     # Color scheme hook (native)
│   ├── use-color-scheme.web.ts # Color scheme hook (web)
│   └── use-theme-color.ts      # Theme color utilities
│
├── lib/
│   └── utils.ts                # Utility functions (cn, clsx)
│
├── assets/
│   ├── css/
│   │   └── global.css          # Global Tailwind imports & theme
│   └── images/                 # App icons, splash screens, etc.
│
├── scripts/
│   └── reset-project.js        # Project reset script
│
├── .vscode/                    # VS Code settings
├── .backup/                    # Backup files (gitignored)
│
├── app.json                    # Expo app configuration
├── metro.config.js             # Metro bundler config (NativeWind, Monicon)
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── CONTEXT.md                  # Component guidelines for developers
└── README.md                   # Project documentation
```

---

## Development Workflows

### Package Management
**ALWAYS use Bun**, not npm or yarn:
```bash
bun install                    # Install dependencies
bun add <package>              # Add new package
bun remove <package>           # Remove package
```

### Running the App
```bash
bun start                      # Start Expo dev server
bun run android                # Run on Android
bun run ios                    # Run on iOS
bun run web                    # Run on web
bun run lint                   # Run ESLint
```

### Git Workflow
- Main branch: (not specified in current git status)
- Current working branch: `claude/claude-md-mi48zrlg7m12uzsy-01CRGDcMGMjiGGcU9pAnD6Fj`
- Repository is clean with recent commits focused on theming and README updates

---

## Component Conventions

### Component Location Strategy

**Read `CONTEXT.md` for detailed component guidelines.** Key points:

1. **UI Components** (`components/ui/`):
   - Place reusable, UI-related components here (Button, Card, Modal, Input, etc.)
   - Similar to shadcn/ui or Radix component libraries
   - Must follow Duolingo's design language

2. **Screen Components** (`components/screen/`):
   - Place screen-specific, non-reusable components here

### Component Structure Pattern

All UI components follow this pattern:

```tsx
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import * as Haptics from 'expo-haptics';

// Define variants using CVA
const componentVariants = cva(
  'base-classes', // Base classes
  {
    variants: {
      color: {
        default: 'color-classes',
        primary: 'primary-classes',
      },
      size: {
        sm: 'small-classes',
        md: 'medium-classes',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
    }
  }
);

// Define props interface
export interface ComponentProps
  extends BaseComponentProps,
    VariantProps<typeof componentVariants> {
  // Additional props
}

// Component implementation
const Component = React.forwardRef<ElementRef, ComponentProps>(
  ({ className, size, color, ...props }, ref) => {
    return (
      <BaseComponent
        className={cn(componentVariants({ size, color }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Component.displayName = 'Component';

export { Component, componentVariants };
```

### Key Component Features

1. **Haptic Feedback**: Buttons use `expo-haptics` for tactile feedback
2. **Variants**: Use `class-variance-authority` for variant management
3. **Type Safety**: All components are fully typed with TypeScript
4. **Forward Refs**: Components use `React.forwardRef` for ref forwarding
5. **Display Names**: All components set `displayName` for debugging

---

## Styling and Theming

### NativeWind v5 (TailwindCSS v4)

This project uses **NativeWind v5 (preview)**, which is based on **TailwindCSS v4**. The syntax differs from v3:

#### Global CSS (`assets/css/global.css`)
```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";

@theme {
  /* Define custom colors using oklch */
  --color-primary-500: oklch(52.7% 0.19 244.62);
}
```

#### Tailwind Config (`tailwind.config.js`)
```js
module.exports = {
  theme: {
    colors: {
      // Use CSS custom properties
      foreground: "rgb(var(--color-foreground) / <alpha-value>)",
      background: "rgb(var(--color-background) / <alpha-value>)",
    },
  },
};
```

### Theme Management

1. **Color Scheme Hook**: Use `@/hooks/use-color-scheme` to get current theme
2. **Theme Provider**: Set up in `app/_layout.tsx` with `ThemeProvider`
3. **Dark Mode**: Use `dark:` prefix in className (e.g., `dark:bg-neutral-950`)
4. **Dynamic Theme**: Color scheme can be changed with `Appearance.setColorScheme()`

### Primary Color Palette

The project uses **Sky Blue** as the primary color (defined in `global.css`):
- `primary-50` to `primary-950` (oklch color space)
- Default: `primary-500` (medium sky blue)

### Utility Function

**`cn()` function** (`lib/utils.ts`): Merges class names intelligently
```tsx
import { cn } from '@/lib/utils';

// Usage
<View className={cn('base-class', condition && 'conditional-class', className)} />
```

---

## Key Files and Their Purpose

### Configuration Files

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript config with strict mode and path alias `@/*` |
| `tailwind.config.js` | Tailwind custom colors (foreground/background) |
| `metro.config.js` | Metro bundler config for NativeWind and Monicon |
| `postcss.config.mjs` | PostCSS config for TailwindCSS |
| `app.json` | Expo app configuration |
| `.editorconfig` | Editor settings for consistent formatting |
| `eslint.config.js` | ESLint configuration |

### Core Application Files

| File | Purpose |
|------|---------|
| `app/_layout.tsx` | Root layout: imports global CSS, sets up theme provider |
| `app/(tabs)/_layout.tsx` | Tab navigation layout configuration |
| `components/ui/index.tsx` | Barrel export for all UI components |
| `lib/utils.ts` | Utility functions (cn, clsx exports) |
| `constants/theme.ts` | Color and font constants |

### Documentation

| File | Purpose |
|------|---------|
| `README.md` | Project overview, features, setup instructions |
| `CONTEXT.md` | Component guidelines and design principles |
| `CLAUDE.md` | This file - AI assistant guide |

---

## Best Practices for AI Assistants

### 1. Component Creation

When creating new UI components:

1. **Check existing components first**: Review `components/ui/` before creating
2. **Follow the pattern**: Use CVA for variants, React.forwardRef, TypeScript
3. **Use Duolingo design language**: Playful, rounded corners, shadow effects
4. **Add haptic feedback**: For interactive components (buttons, switches)
5. **Export from index**: Add to `components/ui/index.tsx` barrel export

Example button from the codebase shows the shadow-based "3D" effect:
```tsx
className="rounded-xl shadow-[0_6px_0_0] shadow-primary-500 active:shadow-[0_0px_0_0] active:translate-y-2"
```

### 2. Styling Guidelines

- **Use Tailwind classes**: Prefer NativeWind over inline styles
- **Use cn() for merging**: Always merge className props with cn()
- **Dark mode**: Include dark: variants for theme support
- **Consistent spacing**: Use Tailwind spacing scale (px-4, py-2, etc.)
- **Colors**: Use primary-* for brand colors, neutral-* for grayscale

### 3. TypeScript

- **Strict mode enabled**: All code must type-check
- **Path alias**: Use `@/` for imports (e.g., `@/components/ui/button`)
- **Interface exports**: Export component prop interfaces
- **No any types**: Avoid `any`, use proper types

### 4. File Organization

- **Reusable UI components**: → `components/ui/`
- **Screen-specific components**: → `components/screen/`
- **Utilities**: → `lib/`
- **Hooks**: → `hooks/`
- **Constants**: → `constants/`
- **Types**: Co-locate with components or in dedicated `.types.ts` files

### 5. Navigation

- **File-based routing**: Expo Router uses files in `app/` for routes
- **Groups**: Use `(groupname)` for layout grouping without route segment
- **Dynamic routes**: Use `[param].tsx` for dynamic segments
- **Modals**: Use `modal.tsx` pattern (see `app/modal.tsx`)

### 6. Icons

- Use `@monicon/native` for icons (Iconify support)
- Import from `@/components/ui/icon` for consistent wrapper
- Format: `ph:icon-name` (Phosphor icons by default based on `@iconify-json/ph`)

### 7. Performance

- **Reanimated**: Use `react-native-reanimated` for animations
- **Memoization**: Use React.memo for expensive components
- **Lazy loading**: Consider lazy loading for large screens

---

## Common Tasks

### Adding a New UI Component

1. Create file in `components/ui/new-component.tsx`
2. Follow the component pattern (CVA + forwardRef + TypeScript)
3. Match Duolingo design style (rounded, shadows, playful colors)
4. Add haptic feedback if interactive
5. Export from `components/ui/index.tsx`
6. Update README.md component list if significant

### Adding a New Screen

1. Create file in `app/` or `app/(tabs)/` with appropriate name
2. Use TypeScript and import from `@/components/ui`
3. Follow existing screen patterns (see `app/(tabs)/components.tsx`)

### Modifying Theme Colors

1. Edit `assets/css/global.css` for primary/custom colors (oklch format)
2. Edit `tailwind.config.js` for foreground/background
3. Update `constants/theme.ts` if adding to Colors object
4. Test in both light and dark modes

### Adding Dependencies

```bash
bun add <package>              # Production dependency
bun add --dev <package>        # Dev dependency
```

Then update relevant config files (metro.config.js, etc.) if needed.

### Debugging

- **Metro bundler errors**: Check `metro.config.js` configuration
- **Style not applying**: Ensure global.css is imported in root layout
- **Type errors**: Check `tsconfig.json` paths and imports
- **Dark mode issues**: Check `dark:` prefixes and ThemeProvider setup

---

## Important Notes

### NativeWind v5 Differences

NativeWind v5 is **alpha/preview** and differs from v3:
- Uses TailwindCSS v4 (not v3)
- Different `@import` syntax in CSS
- Uses `@theme` directive instead of `@layer`
- Colors defined with `oklch()` color space
- Some plugins may not work the same way

### Build Tool

**Always use Bun**, not npm/yarn/pnpm:
- Lock file: `bun.lock` (not package-lock.json)
- Commands: `bun install`, `bun add`, `bun run`

### Override Warning

The package.json includes:
```json
"overrides": {
  "lightningcss": "1.30.1"
}
```
This is required for compatibility. Do not change without testing.

---

## References

- **Expo Docs**: https://docs.expo.dev/
- **Expo Router**: https://docs.expo.dev/router/introduction/
- **NativeWind**: https://www.nativewind.dev/ (note: v5 preview)
- **TailwindCSS v4**: https://tailwindcss.com/
- **React Native**: https://reactnative.dev/
- **Class Variance Authority**: https://cva.style/docs
- **Monicon**: https://monicon.io/

---

## Questions or Issues?

1. Check `CONTEXT.md` for component guidelines
2. Review `README.md` for setup and dependencies
3. Examine existing components in `components/ui/` for patterns
4. Test changes in both light and dark modes
5. Ensure TypeScript strict mode compliance

---

**Last Updated**: 2025-11-18
**Project Version**: 1.0.0
