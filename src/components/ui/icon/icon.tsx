import { createIconConfigs, IconProps } from "./icon.props";
import { resolveStyleInput } from "@/helpers/resolve-style-input";

export const Icon: React.FC<IconProps> = ({
  onClick,
  icon: Icon,
  size = "md",
  strokeWidth,
  strokeLine = "round",
  ...rest
}) => {
  const res = resolveStyleInput(
    rest,
    createIconConfigs(size, strokeWidth, strokeLine),
  );
  return <Icon className={res.className} style={res.style} onClick={onClick} />;
};
