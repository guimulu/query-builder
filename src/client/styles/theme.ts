interface BreakPoint {
  min: number;
  max?: number;
  columns: number;
}

interface BreakPoints {
  xs: BreakPoint;
  sm: BreakPoint;
  md: BreakPoint;
  lg: BreakPoint;
  xl: BreakPoint;
}

interface MediaQueries {
  xs: string;
  xsUp: string;
  sm: string;
  smUp: string;
  md: string;
  mdUp: string;
  lg: string;
  lgUp: string;
  xl: string;
  xlUp: string;
}

interface ThemeT {
  breakPoints: BreakPoints;
  media: MediaQueries;
}

const breakPoints: BreakPoints = {
  xs: { min: 320, max: 599, columns: 4 },
  sm: { min: 600, max: 767, columns: 4 },
  md: { min: 768, max: 1199, columns: 8 },
  lg: { min: 1200, max: 1695, columns: 12 },
  xl: { min: 1696, columns: 12 },
};

const media: MediaQueries = {
  xs: `@media (min-width: ${breakPoints.xs.min}px) and (max-width: ${breakPoints.xs.max}px)`,
  xsUp: `@media (min-width: ${breakPoints.xs.min}px)`,
  sm: `@media (min-width: ${breakPoints.sm.min}px) and (max-width: ${breakPoints.sm.max}px)`,
  smUp: `@media (min-width: ${breakPoints.sm.min}px)`,
  md: `@media (min-width: ${breakPoints.md.min}px) and (max-width: ${breakPoints.md.max}px)`,
  mdUp: `@media (min-width: ${breakPoints.md.min}px)`,
  lg: `@media (min-width: ${breakPoints.lg.min}px) and (max-width: ${breakPoints.lg.max}px)`,
  lgUp: `@media (min-width: ${breakPoints.lg.min}px)`,
  xl: `@media (min-width: ${breakPoints.xl.min}px)`,
  xlUp: `@media (min-width: ${breakPoints.xl.min}px)`,
};

const THEME: ThemeT = {
  breakPoints,
  media,
};

export type { MediaQueries, BreakPoint, BreakPoints, ThemeT };
export default THEME;
