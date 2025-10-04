import { Monicon } from '@monicon/native';
// @ts-ignore
// import * as NW from 'nativewind';
// import { JSX } from 'react';

export const Icon = Monicon;

// const AStyled = NW.styled // as typeof RawStyled;

// export const Icon = (AStyled(Monicon, {
//   className: "style"
// })) as (props: MoniconProps & { className?: string }) => JSX.Element;



// export type MoniconPropsWithClassName = MoniconProps & {
//   className?: string
// }

// const BaseIcon = AStyled(Monicon as React.ComponentType<MoniconPropsWithClassName>, {
//   // className: {
//   //   target: 'color',
//   //   // nativeStyleMapping: {
//   //   //   color: true,
//   //   // },
//   //   // nativeStyleToProp: {
//   //   //   color: true,
//   //   // },
//   // }
// })

// const BaseIcon = AStyled(
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

//   // Native platforms: forward props directly.
//   return <BaseIcon name={name} size={size} {...restProps} className={className} />
// }

// export default Icon