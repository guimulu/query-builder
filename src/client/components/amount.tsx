import { useState } from "react";

import type { FieldProps } from "@components/dynamic-field";
import Select from "@components/select";
import TextInput from "@components/text-input";
import maskCurrency from "@utils/mask-currency";

import { amountSchema, type Currency, type Rule } from "@schemas/RuleSchema";

const AmountField: React.FC<FieldProps> = ({
  rule,
  onChange,
  isValueValid,
  setIsValueValid,
}) => {
  const [currency, setCurrency] = useState<Currency>("EUR");

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // I'm limiting the amount to 12 characters but it could be changed depending on the requirements
    if (e.target.value.length > 12) return;
    // Basically allowing only numbers, dots and 2 decimal places
    const value = maskCurrency(e.target.value);

    const updatedRule = {
      ...rule,
      value: { amount: +value, currency },
    };

    setIsValueValid(amountSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value as Currency);
    const updatedRule = {
      ...rule,
      value: {
        amount: typeof rule.value === "object" ? +rule.value?.amount : 0,
        currency: e.target.value as Currency,
      },
    };

    setIsValueValid(amountSchema.safeParse(updatedRule).success);

    onChange(updatedRule as Rule);
  };
  return (
    <>
      <TextInput
        id="amount"
        label="Value"
        value={typeof rule.value === "object" ? `${rule.value?.amount}` : ""}
        onChange={handleAmountChange}
        placeholder="100.00"
        error={isValueValid ? "" : "Invalid Amount"}
      />
      <Select
        id="currency"
        label="Currency"
        name="currency"
        defaultValue={
          typeof rule.value === "object" ? rule.value?.currency : "EUR"
        }
        onChange={handleCurrencyChange}
        options={[
          { value: "EUR", label: "EUR" },
          { value: "USD", label: "USD" },
          { value: "BRL", label: "BRL" },
        ]}
      />
    </>
  );
};

export default AmountField;
