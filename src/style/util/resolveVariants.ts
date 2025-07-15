type VariantConfig = {
  variants: Record<string, string>;
  value?: string;
  cssProp: string;
};

export const resolveVariants = (configs: VariantConfig[]) => {
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

  return {
    className: classNames.join(" "),
    style: style as React.CSSProperties,
  };
};
