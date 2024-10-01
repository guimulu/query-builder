import { useState } from "react";

import AmountField from "@components/amount";
import DeviceIpField from "@components/device-ip";
import IdField from "@components/id";
import InstallmentsField from "@components/installments";
import NameField from "@components/name";
import TransactionStateField from "@components/transaction-state";

import type { Rule } from "@schemas/RuleSchema";

export interface DynamicFieldProps {
  rule: Rule;
  onChange: (updatedRule: Rule) => void;
}

export interface FieldProps extends DynamicFieldProps {
  isValueValid: boolean;
  setIsValueValid: React.Dispatch<React.SetStateAction<boolean>>;
}

const DynamicField: React.FC<DynamicFieldProps> = ({ rule, onChange }) => {
  const [isValueValid, setIsValueValid] = useState(false);

  if (rule.fieldName === "amount") {
    return (
      <AmountField
        rule={rule}
        onChange={onChange}
        isValueValid={isValueValid}
        setIsValueValid={setIsValueValid}
      />
    );
  }
  if (rule.fieldName === "installments") {
    return (
      <InstallmentsField
        rule={rule}
        onChange={onChange}
        isValueValid={isValueValid}
        setIsValueValid={setIsValueValid}
      />
    );
  }

  if (rule.fieldName === "device_ip") {
    return (
      <DeviceIpField
        rule={rule}
        onChange={onChange}
        isValueValid={isValueValid}
        setIsValueValid={setIsValueValid}
      />
    );
  }

  if (rule.fieldName === "transaction_state") {
    return (
      <TransactionStateField
        rule={rule}
        onChange={onChange}
        isValueValid={isValueValid}
        setIsValueValid={setIsValueValid}
      />
    );
  }

  if (rule.fieldName === "id") {
    return (
      <IdField
        rule={rule}
        onChange={onChange}
        isValueValid={isValueValid}
        setIsValueValid={setIsValueValid}
      />
    );
  }

  return (
    <NameField
      rule={rule}
      onChange={onChange}
      isValueValid={isValueValid}
      setIsValueValid={setIsValueValid}
    />
  );
};

export default DynamicField;
