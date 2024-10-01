import { useFela } from "react-fela";

import Box from "@components/box";

import { type ResponsiveCSSType } from "@styles/responsive-css-type";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name: string;
  label: string;
  options: SelectOption[];
  defaultValue: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  sx?: ResponsiveCSSType;
}

export default function Select(props: SelectProps) {
  const {
    id,
    name,
    label,
    options,
    defaultValue,
    onChange,
    disabled = false,
    error = "",
    sx,
  } = props;
  const { css } = useFela();

  return (
    <Box sx={{ position: "relative" }}>
      <label
        data-cy={`select-${id}-label`}
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
      <select
        data-cy={`select-${id}`}
        name={name}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        className={css([
          {
            height: "42px",
            minWidth: "200px",
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            borderWidth: "1px",
            borderColor: error ? "#AF473F" : "transparent",
            borderStyle: "solid",
            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            backgroundColor: "#111827",
            cursor: "pointer",
            transition: "border-color 0.25s",
            ":hover": {
              borderColor: "#6366F1",
            },
            ":focus": {
              outline: "4px auto -webkit-focus-ring-color",
            },
          },
          sx as any,
        ])}
      >
        {options.map((option) => (
          <Box
            as="option"
            sx={{
              backgroundColor: "#111827",
              color: "#d1d5db",
            }}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </Box>
        ))}
      </select>
      <Box
        data-cy={`select-${id}-error`}
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
