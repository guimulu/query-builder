import { useEffect, useRef, useState } from "react";

import Box from "@components/box";
import Button from "@components/button";
import DynamicField from "@components/dynamic-field";
import Select from "@components/select";

import type { Rule } from "@schemas/RuleSchema";

interface RuleComponentProps {
  rule: Rule;
  onChange: (updatedRule: Rule) => void;
  onRemove: () => void;
}

const RuleComponent: React.FC<RuleComponentProps> = ({
  rule,
  onChange,
  onRemove,
}) => {
  const ruleRef = useRef<HTMLDivElement>(null);
  const defaultOperationOptions = [
    { value: "EQUAL", label: "EQUAL" },
    { value: "NOT_EQUAL", label: "NOT EQUAL" },
  ];
  const extraOperationOptions = [
    { value: "LESS_THAN", label: "LESS THAN" },
    { value: "GREATER_THAN", label: "GREATER THAN" },
  ];

  const [operationOptions, setOperationOptions] = useState(
    defaultOperationOptions,
  );

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (e.target.value === "amount" || e.target.value === "installments") {
      setOperationOptions([
        ...defaultOperationOptions,
        ...extraOperationOptions,
      ]);
    } else {
      setOperationOptions(defaultOperationOptions);
    }

    const updatedRule = {
      ...rule,
      fieldName: e.target.value,
      operation: "EQUAL",
      value: e.target.value === "amount" ? { amount: "", currency: "EUR" } : "",
    };
    onChange(updatedRule as Rule);
  };

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedRule = { ...rule, operation: e.target.value as string };
    onChange(updatedRule as Rule);
  };

  useEffect(() => {
    if (ruleRef.current) {
      ruleRef.current.scrollIntoView({ behavior: "smooth" });
    }
    return () => {};
  }, []);

  return (
    <Box
      data-cy="rule"
      ref={ruleRef}
      sx={{
        marginBottom: "1.5rem",
        display: "flex",
        gap: ".5rem",
        flexWrap: "wrap",
      }}
    >
      <Select
        name="fieldName"
        id="fieldName"
        label="Field Name"
        defaultValue={rule.fieldName}
        onChange={handleFieldChange}
        options={[
          { value: "name", label: "Name" },
          { value: "amount", label: "Amount" },
          { value: "id", label: "ID" },
          { value: "transaction_state", label: "Transaction State" },
          { value: "installments", label: "Installments" },
          { value: "device_ip", label: "Device IP" },
        ]}
      />

      <Select
        sx={{ minWidth: "159px" }}
        id="operation"
        label="Operation"
        name="operation"
        defaultValue={rule.operation as string}
        onChange={handleOperationChange}
        options={operationOptions}
      />

      <DynamicField rule={rule} onChange={onChange} />

      <Button data-cy="remove-rule" onClick={onRemove} variant="danger">
        -
      </Button>
    </Box>
  );
};

export default RuleComponent;
