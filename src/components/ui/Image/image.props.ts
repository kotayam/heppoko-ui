import { CustomStyleProps } from "@/components/common";
import { BorderProps } from "@/props/shared/border.props";
import { DimensionProps } from "@/props/shared/dimension.props";
import { ShadowProps } from "@/props/shared/shadow.props";

export type ImageProps = {
  src: string;
  alt: string;
} & CustomStyleProps &
  BorderProps &
  DimensionProps &
  ShadowProps;
