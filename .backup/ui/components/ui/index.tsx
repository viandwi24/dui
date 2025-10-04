// @ts-ignore

export { SafeAreaView } from "react-native-safe-area-context";
export * from "./button";
export * from "./card";
export * from "./gradient";
export * from './icon';
export * from "./input";
export * from "./text";
export * from "./toast";
export * from "./view";

// export type MoniconPropsWithClassName = MoniconProps & {
//   className?: string
// }

// const BaseIcon = cssInterop(
//   Monicon as React.ComponentType<MoniconPropsWithClassName>,
//   {
//     className: {
//       target: 'className',
//       nativeStyleToProp: {
//         color: true,
//       },
//     },
//   },
// )

// export const Icon: React.FC<MoniconPropsWithClassName> = (props) => {
//   const { color, className, name, size, ...restProps } = props as any

//   if (Platform.OS === 'web') {
//     return (
//       <span className={className}>
//         <BaseIcon name={name} size={size} {...restProps} />
//       </span>
//     )
//   }

//   // Native platforms: forward props directly.
//   return <BaseIcon name={name} size={size} {...restProps} className={className} />
// }