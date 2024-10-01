import type { FieldProps } from "@components/dynamic-field";
import TextInput from "@components/text-input";

import { installmentsSchema, type Rule } from "@schemas/RuleSchema";

const InstallmentsField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const handleInstallmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > 12) return;

    const updatedRule = {
      ...rule,
      value: +value.replace(/[^0-9]/g, ""),
    };

    setIsValueValid(installmentsSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  return (
    <TextInput
      id="installments"
      label="Value"
      placeholder="123"
      value={`${rule.value}`}
      onChange={handleInstallmentsChange}
      error={isValueValid ? "" : "Invalid Installments"}
    />
  );
};

export default InstallmentsField;
