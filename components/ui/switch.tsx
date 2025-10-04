import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as Haptics from 'expo-haptics';
import * as React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { View } from './view';

const switchVariants = cva(
  'rounded-full transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'w-10 h-6',
        md: 'w-12 h-7',
        lg: 'w-14 h-8',
      },
      color: {
        default: 'bg-gray-300',
        primary: 'bg-blue-400',
        success: 'bg-green-400',
        danger: 'bg-red-400',
      },
    },
    defaultVariants: {
      size: 'md',
      color: 'default',
    },
  }
);

const switchThumbVariants = cva(
  'absolute bg-white rounded-full shadow-md transition-all duration-300',
  {
    variants: {
      size: {
        sm: 'w-4 h-4 top-1',
        md: 'w-5 h-5 top-1',
        lg: 'w-6 h-6 top-1',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface SwitchProps
  extends TouchableOpacityProps, VariantProps<typeof switchVariants> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<React.ElementRef<typeof TouchableOpacity>, SwitchProps>(
  ({ className, size, color, checked = false, onCheckedChange, onPressIn, ...props }, ref) => {
    const handlePress = () => {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      onCheckedChange?.(!checked);
    };

    const thumbPosition = checked 
      ? size === 'sm' ? 'left-5' : size === 'md' ? 'left-6' : 'left-7'
      : 'left-1';

    const activeColor = checked 
      ? color === 'default' ? 'bg-blue-400' : 
        color === 'primary' ? 'bg-blue-400' :
        color === 'success' ? 'bg-green-400' :
        color === 'danger' ? 'bg-red-400' : 'bg-blue-400'
      : 'bg-gray-300';

    return (
      <TouchableOpacity
        ref={ref}
        className={cn(
          switchVariants({ size, className }),
          activeColor
        )}
        activeOpacity={0.8}
        onPress={handlePress}
        onPressIn={(e) => {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          onPressIn?.(e);
        }}
        {...props}
      >
        <View
          className={cn(
            switchThumbVariants({ size }),
            thumbPosition
          )}
        />
      </TouchableOpacity>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch, switchVariants };