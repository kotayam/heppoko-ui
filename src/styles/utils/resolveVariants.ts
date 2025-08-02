import { CSSProperties } from "react";

// VariantConfig represents the config for a variant.
export type VariantConfig = {
  variants: Record<string, string>;
  value?: string | number;
  cssProp: string;
};

// createConfig creates a new VariantConfig.
export const createConfig = (
  variants: Record<string, string>,
  value: string | number | undefined,
  cssProp: string,
): VariantConfig => {
  return { variants, value, cssProp };
};

// resolveVariants returns a className and styles from VariantConfigs.
export const resolveVariants = (
  configs: VariantConfig[],
  className?: string,
  style?: CSSProperties,
) => {
  const classNames: string[] = [];
  const inputStyle: Record<string, string | number> = {};

  for (const { variants, value, cssProp } of configs) {
    if (!value) continue;

    if (value in variants) {
      classNames.push(variants[value]);
    } else {
      inputStyle[cssProp] = value;
    }
  }
  if (className) classNames.push(className);

  const combinedStyle: CSSProperties = {
    ...(inputStyle as CSSProperties),
    ...style,
  };

  return {
    className: classNames.join(" "),
    style: combinedStyle,
  };
};
