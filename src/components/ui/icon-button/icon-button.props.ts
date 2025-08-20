import { ColorProps, WrapperProps } from "@/components/common";
import { DimensionProps } from "@/props/shared/dimension.props";
import { BorderProps } from "@/props/shared/border.props";
import { MarginProps } from "@/props/shared/margin.props";
import { PaddingProps } from "@/props/shared/padding.props";
import { ShadowProps } from "@/props/shared/shadow.props";
import { VisibilityProps } from "@/props/shared/visibility.props";

export type IconButtonProps = WrapperProps &
  DimensionProps &
  BorderProps &
  MarginProps &
  PaddingProps &
  ColorProps &
  ShadowProps &
  VisibilityProps;
