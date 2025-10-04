import * as React from 'react';
import RN from "react-native";
// @ts-ignore
import * as NW from 'nativewind';
export const ViewStyled = NW.styled(RN.View, { className: "style" });

// export const viewVariants = cva(
//   '',
//   {
//     variants: {
//       type: {
//         raw: '',
//       }
//     },
//     defaultVariants: {
//       type: 'raw',
//     },
//   },
// )

// export interface ViewProps extends RN.ViewProps, VariantProps<typeof viewVariants> {
//   safeTop?: boolean;
// }

// const View = React.forwardRef<React.ElementRef<typeof RN.View>, ViewProps>(
//   ({ className, type, style, ...props }, ref) => {
//     const insets = useSafeAreaInsets();
//     return (
//       <ViewStyled
//         className={cva(viewVariants({ type, className }))}
//         style={{
//           paddingTop: props.safeTop ? insets.top : 0,
//           ...style as object
//         }}
//         ref={ref}
//         {...props}
//       />
//     );
//   }
// );
// View.displayName = 'View';

// export { View };



// const View = RN.View;
export const CustomView = (props: RN.ViewProps) => {
  return <RN.View {...props} />;
}

export const View = NW.styled(CustomView, { className: "style" }) as typeof RN.View;
