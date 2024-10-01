import { useState } from "react";

import AmountField from "@components/amount";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<AmountField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "amount",
      value: {
        // @ts-expect-error amount is not a string but for tests purposes we want to start with an empty string
        amount: "",
        currency: "EUR",
      },
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);
    return (
      <StyleProvider>
        <AmountField
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
    cy.dataCy("text-input").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("text-input-label").should("exist").and("have.text", "Value");
    cy.dataCy("text-input-error")
      .should("be.visible")
      .and("have.text", "Invalid Amount");
  });

  it("type a valid amount", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("123");
    cy.dataCy("text-input").should("have.value", "1.23");
    cy.dataCy("text-input-error").should("not.be.visible");
  });

  it("type amount with length bigger than 12", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("12345678912345");
    cy.dataCy("text-input").should("have.value", "123456789.12");
  });

  it("type a negative amount", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("-123");
    cy.dataCy("text-input").should("have.value", "1.23");
  });

  it("type characters", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("abc");
    cy.dataCy("text-input").should("have.value", "0");
  });
});
