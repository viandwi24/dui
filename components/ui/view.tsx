import * as React from "react";
import RN from "react-native";

// @ts-ignore
import { styled } from "nativewind";
export const ViewStyled = styled(RN.View, { className: "style" });

export const CustomView = (props: RN.ViewProps) => {
  return <RN.View {...props} />;
};

export const View = styled(
  CustomView,
  {
    className: "style",
  },
  {
    passThrough: true,
  },
) as unknown as typeof RN.View;

export const ScrollView = styled(
  RN.ScrollView,
  {
    className: "style",
    classNameIndicator: "indicatorStyle",
    classNameContentContainer: "contentContainerStyle",
  },
  {
    // passThrough: true,
  },
) as unknown as typeof RN.ScrollView;
