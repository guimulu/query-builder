import { FieldProps } from "@components/dynamic-field";
import TextInput from "@components/text-input";
import maskIp from "@utils/mask-ip";

import { deviceIpSchema, type Rule } from "@schemas/RuleSchema";

const DeviceIpField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const handleIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = maskIp(e.target.value);

    const updatedRule = { ...rule, value: value };

    setIsValueValid(deviceIpSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  return (
    <TextInput
      id="device_ip"
      label="Value"
      value={`${rule.value}`}
      onChange={handleIpChange}
      placeholder="192.168.1.1"
      error={isValueValid ? "" : "Invalid IP"}
    />
  );
};

export default DeviceIpField;
