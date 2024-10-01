import type { FieldProps } from "@components/dynamic-field";
import TextInput from "@components/text-input";

import { idSchema, type Rule } from "@schemas/RuleSchema";

const IdField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 255) return;

    const updatedRule = { ...rule, value };

    setIsValueValid(idSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  return (
    <TextInput
      id="id"
      label="Value"
      value={`${rule.value}`}
      onChange={handleIdChange}
      placeholder="123456"
      error={isValueValid ? "" : "Invalid ID"}
    />
  );
};

export default IdField;
