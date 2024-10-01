import type { FieldProps } from "@components/dynamic-field";
import Select from "@components/select";

import {
  type Rule,
  TransactionState,
  transactionStateSchema,
} from "@schemas/RuleSchema";

const TransactionStateField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const handleTransactionStateChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const updatedRule = {
      ...rule,
      value: e.target.value as TransactionState,
    };

    setIsValueValid(transactionStateSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  return (
    <Select
      id="transaction_state"
      label="Value"
      defaultValue={`${rule.value}`}
      name="transaction_state"
      onChange={handleTransactionStateChange}
      options={[
        { label: "Select...", value: "" },
        { value: TransactionState.SUCCEEDED, label: "SUCCEEDED" },
        { value: TransactionState.REJECTED, label: "REJECTED" },
        { value: TransactionState.ERROR, label: "ERROR" },
        { value: TransactionState.TIMEOUT, label: "TIMEOUT" },
        { value: TransactionState.CANCELLED, label: "CANCELLED" },
        { value: TransactionState.FAILED, label: "FAILED" },
        { value: TransactionState.ABORTED, label: "ABORTED" },
      ]}
      error={isValueValid ? "" : "Invalid Transaction State"}
    />
  );
};

export default TransactionStateField;
