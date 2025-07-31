// VariantConfig represents the config for a variant.
type VariantConfig = {
  variants: Record<string, string>;
  value?: string;
  cssProp: string;
};

// createConfig creates a new VariantConfig.
export const createConfig = (
  variants: Record<string, string>,
  value: string | undefined,
  cssProp: string,
): VariantConfig => {
  return { variants, value, cssProp };
};

// resolveVariants returns a className and styles from VariantConfigs.
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

  return {
    className: classNames.join(" "),
    style: style as React.CSSProperties,
  };
};
