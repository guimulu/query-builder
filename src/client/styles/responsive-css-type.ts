import * as CSS from "csstype";
import { IStyle } from "fela";

type ResponsiveValue<T> =
  | T
  | null
  | Array<T | null>
  | string
  | number
  | string[]
  | number[];

type ResponsiveCSS = IStyle & {
  padding?: ResponsiveValue<CSS.Property.Padding>;
  paddingLeft?: ResponsiveValue<CSS.Property.PaddingLeft>;
  paddingRight?: ResponsiveValue<CSS.Property.PaddingRight>;
  paddingTop?: ResponsiveValue<CSS.Property.PaddingTop>;
  paddingBottom?: ResponsiveValue<CSS.Property.PaddingBottom>;
  margin?: ResponsiveValue<CSS.Property.Margin>;
  marginLeft?: ResponsiveValue<CSS.Property.MarginLeft>;
  marginRight?: ResponsiveValue<CSS.Property.MarginRight>;
  marginTop?: ResponsiveValue<CSS.Property.MarginTop>;
  marginBottom?: ResponsiveValue<CSS.Property.MarginBottom>;
  color?: ResponsiveValue<CSS.Property.Color>;
  background?: ResponsiveValue<CSS.Property.Background>;
  backgroundColor?: ResponsiveValue<CSS.Property.BackgroundColor>;
  fontSize?: ResponsiveValue<CSS.Property.FontSize>;
  fontWeight?: ResponsiveValue<CSS.Property.FontWeight>;
  lineHeight?: ResponsiveValue<CSS.Property.LineHeight>;
  textAlign?: ResponsiveValue<CSS.Property.TextAlign>;
  fontStyle?: ResponsiveValue<CSS.Property.FontStyle>;
  letterSpacing?: ResponsiveValue<CSS.Property.LetterSpacing>;
  display?: ResponsiveValue<CSS.Property.Display>;
  width?: ResponsiveValue<CSS.Property.Width>;
  maxWidth?: ResponsiveValue<CSS.Property.MaxWidth>;
  minWidth?: ResponsiveValue<CSS.Property.MinWidth>;
  height?: ResponsiveValue<CSS.Property.Height>;
  maxHeight?: ResponsiveValue<CSS.Property.MaxHeight>;
  minHeight?: ResponsiveValue<CSS.Property.MinHeight>;
  size?: ResponsiveValue<CSS.Property.Height>;
  verticalAlign?: ResponsiveValue<CSS.Property.VerticalAlign>;
  alignItems?: ResponsiveValue<CSS.Property.AlignItems>;
  alignContent?: ResponsiveValue<CSS.Property.AlignContent>;
  justifyItems?: ResponsiveValue<CSS.Property.JustifyItems>;
  justifyContent?: ResponsiveValue<CSS.Property.JustifyContent>;
  flexWrap?: ResponsiveValue<CSS.Property.FlexWrap>;
  flexBasis?: ResponsiveValue<CSS.Property.FlexBasis>;
  flexDirection?: ResponsiveValue<CSS.Property.FlexDirection>; // Even with native values being used (i.e. 'row'), TS is saying: Type 'string' is not assignable to type 'ResponsiveValue<FlexDirection>'
  flex?: ResponsiveValue<CSS.Property.Flex>;
  justifySelf?: ResponsiveValue<CSS.Property.JustifySelf>;
  alignSelf?: ResponsiveValue<CSS.Property.AlignSelf>;
  order?: ResponsiveValue<CSS.Property.Order>;
  flexGrow?: ResponsiveValue<CSS.Property.FlexGrow>;
  flexShrink?: ResponsiveValue<CSS.Property.FlexShrink>;
  gap?: ResponsiveValue<CSS.Property.Gap>;
  gridGap?: ResponsiveValue<CSS.Property.GridGap>;
  gridColumnGap?: ResponsiveValue<CSS.Property.GridColumnGap>;
  gridRowGap?: ResponsiveValue<CSS.Property.GridRowGap>;
  gridColumn?: ResponsiveValue<CSS.Property.GridColumn>;
  gridRow?: ResponsiveValue<CSS.Property.GridRow>;
  gridAutoFlow?: ResponsiveValue<CSS.Property.GridAutoFlow>;
  gridAutoColumns?: ResponsiveValue<CSS.Property.GridAutoColumns>;
  gridAutoRows?: ResponsiveValue<CSS.Property.GridAutoRows>;
  gridTemplateColumns?: ResponsiveValue<CSS.Property.GridTemplateColumns>;
  gridTemplateRows?: ResponsiveValue<CSS.Property.GridTemplateRows>;
  gridTemplateAreas?: ResponsiveValue<CSS.Property.GridTemplateAreas>;
  gridArea?: ResponsiveValue<CSS.Property.GridArea>;
  borderWidth?: ResponsiveValue<CSS.Property.BorderWidth>;
  borderTopWidth?: ResponsiveValue<CSS.Property.BorderTopWidth>;
  borderBottomWidth?: ResponsiveValue<CSS.Property.BorderBottomWidth>;
  borderLeftWidth?: ResponsiveValue<CSS.Property.BorderLeftWidth>;
  borderRightWidth?: ResponsiveValue<CSS.Property.BorderRightWidth>;
  borderStyle?: ResponsiveValue<CSS.Property.BorderStyle>;
  borderTopStyle?: ResponsiveValue<CSS.Property.BorderTopStyle>;
  borderBottomStyle?: ResponsiveValue<CSS.Property.BorderBottomStyle>;
  borderLeftStyle?: ResponsiveValue<CSS.Property.BorderLeftStyle>;
  borderRightStyle?: ResponsiveValue<CSS.Property.BorderRightStyle>;
  borderColor?: ResponsiveValue<CSS.Property.BorderColor>;
  borderTopColor?: ResponsiveValue<CSS.Property.BorderTopColor>;
  borderBottomColor?: ResponsiveValue<CSS.Property.BorderBottomColor>;
  borderLeftColor?: ResponsiveValue<CSS.Property.BorderLeftColor>;
  borderRightColor?: ResponsiveValue<CSS.Property.BorderRightColor>;
  borderTop?: ResponsiveValue<CSS.Property.BorderTop>;
  borderRight?: ResponsiveValue<CSS.Property.BorderRight>;
  borderBottom?: ResponsiveValue<CSS.Property.BorderBottom>;
  borderLeft?: ResponsiveValue<CSS.Property.BorderLeft>;
  borderRadius?: ResponsiveValue<CSS.Property.BorderRadius>;
  borderTopLeftRadius?: ResponsiveValue<CSS.Property.BorderTopLeftRadius>;
  borderTopRightRadius?: ResponsiveValue<CSS.Property.BorderTopRightRadius>;
  borderBottomLeftRadius?: ResponsiveValue<CSS.Property.BorderBottomLeftRadius>;
  borderBottomRightRadius?: ResponsiveValue<CSS.Property.BorderBottomRightRadius>;
  boxShadow?: ResponsiveValue<CSS.Property.BoxShadow | number>;
  textShadow?: ResponsiveValue<CSS.Property.TextShadow | number>;
  opacity?: ResponsiveValue<CSS.Property.Opacity>;
  overflow?: ResponsiveValue<CSS.Property.Overflow>;
  overflowX?: ResponsiveValue<CSS.Property.OverflowX>;
  overflowY?: ResponsiveValue<CSS.Property.OverflowY>;
  backgroundImage?: ResponsiveValue<CSS.Property.BackgroundImage>;
  backgroundSize?: ResponsiveValue<CSS.Property.BackgroundSize>;
  backgroundPosition?: ResponsiveValue<CSS.Property.BackgroundPosition>;
  backgroundRepeat?: ResponsiveValue<CSS.Property.BackgroundRepeat>;
  zIndex?: ResponsiveValue<CSS.Property.ZIndex>;
  top?: ResponsiveValue<CSS.Property.Top>;
  right?: ResponsiveValue<CSS.Property.Right>;
  bottom?: ResponsiveValue<CSS.Property.Bottom>;
  left?: ResponsiveValue<CSS.Property.Left>;
  position?: ResponsiveValue<CSS.Property.Position>;
  aspectRatio?: ResponsiveValue<CSS.Property.AspectRatio>;
  textTransform?: ResponsiveValue<CSS.Property.TextTransform>;
  [index: string]: any;
};

export type ResponsiveCSSType = ResponsiveCSS;
export type StyleObject = { [key: string]: ResponsiveCSSType };
