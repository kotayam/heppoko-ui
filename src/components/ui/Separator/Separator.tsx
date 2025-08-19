import { createSeparatorConfigs, SeparatorProps } from "./separator.props";
import { resolveStyleInput } from "@/helpers/resolveStyleInput";

export const Separator: React.FC<SeparatorProps> = ({
  onClick,
  orientation = "horizontal",
  size = "full",
  opacity = "translucent",
  m = "1",
  ...rest
}) => {
  const res = resolveStyleInput(
    { opacity: opacity, m: m, ...rest },
    createSeparatorConfigs(orientation, size),
  );
  return (
    <div className={res.className} style={res.style} onClick={onClick}></div>
  );
};
