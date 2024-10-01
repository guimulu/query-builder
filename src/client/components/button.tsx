import { forwardRef } from "react";
import { useFela } from "react-fela";

import { type ResponsiveCSSType } from "../styles/responsive-css-type";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  sx?: ResponsiveCSSType;
  variant?: "default" | "danger";
  ["data-cy"]?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = "button", sx, disabled = false, variant, children, ...props },
    ref,
  ) => {
    const { css } = useFela();

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        data-cy={props["data-cy"] || "button"}
        {...props}
        className={css([
          {
            maxHeight: "42px",
            padding: "0.5rem 1rem",
            border: "1px solid transparent",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            backgroundColor: "#111827",
            cursor: "pointer",
            transition: "border-color 0.25s",
            alignSelf: "flex-end",
            ":hover": {
              borderColor: "#6366F1",
            },
            ":focus": {
              outline: "4px auto -webkit-focus-ring-color",
            },
          },
          variant === "danger" && {
            backgroundColor: "#AF473F",
            ":hover": {
              borderColor: "#ffb4b4",
            },
          },
          sx as any,
        ])}
      >
        {children}
      </button>
    );
  },
);

export default Button;
