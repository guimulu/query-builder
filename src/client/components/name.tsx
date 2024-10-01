import type { FieldProps } from "@components/dynamic-field";
import TextInput from "@components/text-input";

import { nameSchema, type Rule } from "@schemas/RuleSchema";

const NameField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 255) return;

    const updatedRule = { ...rule, value };

    setIsValueValid(nameSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  return (
    <TextInput
      id="name"
      label="Value"
      value={`${rule.value}`}
      onChange={handleValueChange}
      placeholder="John Doe"
      error={isValueValid ? "" : "Invalid Name"}
    />
  );
};
export default NameField;
