import { useState } from "react";

import TransactionStateField from "@components/transaction-state";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<TransactionStateField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "transaction_state",
      // @ts-expect-error transaction_state is not a string but for tests purposes we want to start with an empty string
      value: "",
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);
    return (
      <StyleProvider>
        <TransactionStateField
          onChange={setRule}
          rule={rule}
          isValueValid={isValueValid}
          setIsValueValid={setIsValueValid}
        />
      </StyleProvider>
    );
  };

  it("renders", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("select-transaction_state").should("exist");
    cy.dataCy("select-transaction_state").should("have.value", "");
    cy.dataCy("select-transaction_state-label")
      .should("exist")
      .and("have.text", "Value");
    cy.dataCy("select-transaction_state-error")
      .should("be.visible")
      .and("have.text", "Invalid Transaction State");
  });

  it("select a valid transaction state", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("select-transaction_state").select("REJECTED");
    cy.dataCy("select-transaction_state").should("have.value", "REJECTED");
    cy.dataCy("select-transaction_state-error").should("not.be.visible");
  });
});
