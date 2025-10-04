import { clsx, cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, TextInput, TextInputProps, View, ViewProps } from 'react-native';

const inputVariants = cva(
  'border-[3px] rounded-xl bg-transparent transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'border-neutral-300 dark:border-neutral-700 focus:border-blue-400',
        error: 'border-red-400 focus:border-red-500',
        success: 'border-green-400 focus:border-green-500',
      },
      size: {
        sm: 'px-3 py-2',
        md: 'px-5 py-4',
        lg: 'px-6 py-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const labelVariants = cva(
  'font-semibold mb-2',
  {
    variants: {
      variant: {
        default: 'text-neutral-800 dark:text-neutral-100',
        error: 'text-red-600 dark:text-red-400',
        success: 'text-green-600 dark:text-green-400',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface InputProps
  extends Omit<TextInputProps, 'style'>, VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  containerProps?: ViewProps;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, variant, size, label, error, containerProps, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const finalVariant = error ? 'error' : variant;

    return (
      <View {...containerProps}>
        {label && (
          <Text className={cn(labelVariants({ variant: finalVariant, size }))}>
            {label}
          </Text>
        )}
        <TextInput
          ref={ref}
          className={clsx(
            inputVariants({ variant: finalVariant, size }),
            'text-gray-800 dark:text-gray-200',
            isFocused && 'border-blue-400',
            className
          )}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          placeholderTextColor="#9ca3af"
          {...props}
        />
        {error && (
          <Text className="text-red-500 text-sm mt-1 font-medium">{error}</Text>
        )}
      </View>
    )
  }
)
Input.displayName = 'Input'

export { Input, inputVariants };
