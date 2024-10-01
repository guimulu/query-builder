import { useFela } from "react-fela";

import Box from "@components/box";

import type { ResponsiveCSSType } from "@styles/responsive-css-type";

interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  sx?: ResponsiveCSSType;
}

export default function TextInput(props: TextInputProps) {
  const { id, label, placeholder, onChange, value, error = "", sx } = props;

  const { css } = useFela();

  return (
    <Box sx={{ position: "relative" }}>
      <label
        data-cy="text-input-label"
        htmlFor={id}
        className={css({
          display: "block",
          marginBottom: ".2rem",
          color: "#D1D5DB",
          fontSize: ".8rem",
          fontWeight: 700,
        })}
      >
        {label}
      </label>
      <input
        data-cy="text-input"
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={css([
          {
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            borderWidth: "1px",
            borderColor: error ? "#AF473F" : "transparent",
            borderStyle: "solid",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            backgroundColor: "#111827",
            transition: "border-color 0.25s",
            cursor: "pointer",
            ":hover": {
              borderColor: "#6366F1",
            },
            ":focus": {
              outline: "4px auto -webkit-focus-ring-color",
            },
          },
          sx as any,
        ])}
      />
      <Box
        data-cy="text-input-error"
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          marginTop: ".15rem",
          color: "#AF473F",
          fontSize: ".7rem",
          fontWeight: 700,
          transition: "opacity 0.25s",
          opacity: error ? 1 : 0,
        }}
      >
        {error}
      </Box>
    </Box>
  );
}
