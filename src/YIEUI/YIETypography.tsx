type TypographyTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h5" | "h6" | "p";

const VARIANT_MAPS: Record<TypographyTypes, string> = {
  h1: "font-medium leading-tight text-5xl",
  h2: "font-medium leading-tight text-4xl",
  h3: "font-medium leading-tight text-3xl",
  h4: "font-medium leading-tight text-2xl",
  h5: "font-medium leading-tight text-xl",
  h6: "font-medium leading-tight text-base",
  p: "base mb-1",
};

type Props = {
  variant?: TypographyTypes;
  children: JSX.Element | string;
  component?: TypographyTypes;
  lead?: boolean;
  styleNames?: string;
};

export function YIETypography({
  children,
  variant,
  component = "p",
  lead = false,
  styleNames = "",
}: Props) {
  const Wrapper: keyof JSX.IntrinsicElements = component;

  const classList = "mt-0 mb-2" + lead ? " lead" : "";

  const variantDefault = VARIANT_MAPS[variant || component];

  return (
    <Wrapper className={[classList, variantDefault, styleNames].join(" ")}>
      {children}
    </Wrapper>
  );
}
