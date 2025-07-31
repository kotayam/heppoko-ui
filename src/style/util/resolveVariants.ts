type VariantConfig = {
  variants: Record<string, string>;
  value?: string;
  cssProp: string;
};

export const createConfig = (
  variants: Record<string, string>,
  value: string | undefined,
  cssProp: string,
): VariantConfig => {
  return { variants, value, cssProp };
};

export const resolveVariants = (
  configs: VariantConfig[],
  className?: string,
) => {
  const classNames: string[] = [];
  const style: Record<string, string> = {};

  for (const { variants, value, cssProp } of configs) {
    if (!value) continue;

    if (value in variants) {
      classNames.push(variants[value]);
    } else {
      style[cssProp] = value;
    }
  }
  if (className) classNames.push(className);
  console.log("className", classNames);
  console.log("style", style);

  return {
    className: classNames.join(" "),
    style: style as React.CSSProperties,
  };
};
