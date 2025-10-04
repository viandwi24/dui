import RN from "react-native";
// @ts-ignore
import * as NW from 'nativewind';

// export const View = RN.View;
export const View = NW.styled(RN.View, { className: "style" });