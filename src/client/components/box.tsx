import { forwardRef, PropsWithChildren } from "react";
import type { JSX, MouseEvent } from "react";
import { useFela } from "react-fela";

import type { ResponsiveCSSType } from "../styles/responsive-css-type";

type Props<T = Record<string, unknown>> = {
  as?: keyof JSX.IntrinsicElements;
  role?: string;
  onClick?: (event: MouseEvent) => void;
  value?: string | number;
  sx?: ResponsiveCSSType;
  className?: string;
} & PropsWithChildren &
  T;

export type Ref = HTMLElement;

const Box = forwardRef<Ref, Props>(
  (
    { as: asProp = "div", value, sx = {}, children, className = "", ...props },
    ref,
  ) => {
    const HTMLElement: string = asProp as keyof JSX.IntrinsicElements;
    const { css } = useFela();

    const _className = `${css(sx)}${className ? ` ${className}` : ""}`;

    return (
      // @ts-expect-error I'm passing a dynamic html tag here, which typescript doesn't seem to understand very well
      <HTMLElement value={value} {...props} className={_className} ref={ref}>
        {children}
      </HTMLElement>
    );
  },
);

export default Box;
