import { createRenderer } from "fela";
import responsiveValue from "fela-plugin-responsive-value";
import webPreset from "fela-preset-web";
import globalStyles from "./global";
import THEME from "./theme";

const getMediaQueries = (values: Array<string>): Array<string> => {
  const { xsUp, smUp, mdUp, lgUp, xl } = THEME.media;
  switch (values.length) {
    case 2:
      return [smUp];
    case 3:
      return [smUp, mdUp];
    case 4:
      return [smUp, mdUp, lgUp];
    case 5:
      return [smUp, mdUp, lgUp, xl];
    default:
      return [xsUp];
  }
};

const responsiveProps = {
  padding: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingBottom: true,
  margin: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginBottom: true,
  color: true,
  background: true,
  backgroundColor: true,
  fontSize: true,
  fontWeight: true,
  lineHeight: true,
  textAlign: true,
  fontStyle: true,
  letterSpacing: true,
  display: true,
  width: true,
  maxWidth: true,
  minWidth: true,
  height: true,
  maxHeight: true,
  minHeight: true,
  size: true,
  verticalAlign: true,
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
  gap: true,
  gridGap: true,
  gridColumnGap: true,
  gridRowGap: true,
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  border: true,
  borderWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStyle: true,
  borderTopStyle: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderRightStyle: true,
  borderColor: true,
  borderTopColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  borderRightColor: true,
  borderTop: true,
  borderRight: true,
  borderBottom: true,
  borderLeft: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  boxShadow: true,
  textShadow: true,
  opacity: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  zIndex: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  position: true,
  aspectRatio: true,
  transform: true,
  animation: true,
  textOverflow: true,
  whiteSpace: true,
  textTransform: true,
  content: true,
};

const SKIPPED_CLASSNAMES = [
  "ad",
  "ads",
  "adv",
  "bar",
  "box",
  "bi",
  "faq",
  "fb",
  "ig",
  "lg",
  "md",
  "peg",
  "pin",
  "sm",
  "tab",
  "tw",
  "vk",
  "xl",
  "xs",
];
const mediaQueryOrder = Object.values(THEME.media).map((mediaQuery) =>
  mediaQuery.replace(/@media\s/i, ""),
);

const renderer = createRenderer({
  plugins: [responsiveValue(getMediaQueries, responsiveProps), ...webPreset],
  filterClassName: (className) => !SKIPPED_CLASSNAMES.includes(className),
  mediaQueryOrder,
});

renderer.renderStatic(globalStyles);

export { renderer };
