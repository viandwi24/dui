import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as Haptics from 'expo-haptics';
import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Text } from './text';
import { View } from './view';

// DEFAULT
const buttonVariants = cva(
  'border-none transition-all duration-300 rounded-xl shadow-[0_6px_0_0] shadow-blue-500 flex active:shadow-[0_0px_0_0] active:translate-y-2',
  {
    variants: {
      color: {
        default: 'bg-foreground text-white border-blue-500 shadow-blue-500',
        primary: 'bg-blue-400 border-blue-500 shadow-blue-500',
        danger: 'bg-red-400 border-red-500 shadow-red-500',
      },
      size: {
        sm: 'px-2.5 py-1.5',
        md: 'px-4 py-4',
      },
      alignment: {
        center: 'items-center',
      }
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
      alignment: 'center',
    }
  }
)
const buttonSubTextVariants = cva(
  'font-bold uppercase',
  {
    variants: {
      color: {
        default: '',
        danger: '',
        primary: '',
      },
      size: {
        sm: '',
        md: '',
      },
    },
    defaultVariants: {
      color: 'default',
      size: 'md',
    },
  }
)
export interface ButtonProps
  extends TouchableOpacityProps, VariantProps<typeof buttonVariants> {
  text?: string;
  icon?: React.ReactNode;
}
const Button = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, ButtonProps>(
  ({ children, className, size, color, icon, onPressIn, ...props }, ref) => {

  const showText = () => {
    if (!props.text) return null
    return (
      <Text className={cn(buttonSubTextVariants({ color, size, className }), 'text-center')}>
        {props.text}
      </Text>
    )
  }
  return (
    <TouchableOpacity
      className={cn(buttonVariants({ color, size, className }))}
      ref={ref}
      activeOpacity={70}
      onPressIn={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPressIn?.(e);
      }}
      {...props}
    >
      <View className="flex flex-row gap-2 text-center justify-center items-center">
        {icon}
        {children ?? showText()}
      </View>
    </TouchableOpacity>
  )
})
Button.displayName = 'Button';


// OUTLINE ICON (just static border button with icon and text)
const outlineButtonVariants = cva(
  'bg-transparent rounded-xl border-2',
  {
    variants: {
      color: {
        default: 'border-blue-400 text-blue-400 bg-blue-400/20',
        transparent: 'border-transparent text-gray-500'
      },
      size: {
        sm: 'px-2.5 py-1.5',
        md: 'px-3 py-3',
      },
      alignment: {
        center: 'items-center',
      }
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
      alignment: 'center',
    }
  }
)
export interface OutlineButtonProps
  extends TouchableOpacityProps, VariantProps<typeof outlineButtonVariants> {
  text?: string;
  icon?: React.ReactNode;
}
const OutlineIconButton = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, OutlineButtonProps>(
  ({ children, className, size, icon, color, onPressIn, ...props }, ref) => {
  const showText = () => {
    if (!props.text) return null
    return <Text className="text-blue-500">{props.text}</Text>
  }
  return (
    <TouchableOpacity
      className={cn(outlineButtonVariants({ color, size, className }))}
      ref={ref}
      activeOpacity={10}
      onPressIn={(e) => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        onPressIn?.(e);
      }}
      {...props}
    >
      <View className="flex flex-row gap-2 items-center">
        {icon}
        {children ?? showText()}
      </View>
    </TouchableOpacity>
  )
})
OutlineIconButton.displayName = 'OutlineIconButton';

// exports
export {
  Button,
  buttonVariants, outlineButtonVariants, OutlineIconButton
};

