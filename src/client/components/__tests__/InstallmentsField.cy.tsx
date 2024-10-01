import { useState } from "react";

import InstallmentsField from "@components/installments";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<InstallmentsField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "installments",
      // @ts-expect-error installments is not a string but for tests purposes we want to start with an empty string
      value: "",
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);
    return (
      <StyleProvider>
        <InstallmentsField
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
      .and("have.text", "Invalid Installments");
  });
  it("type a valid installments", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("1");
    cy.dataCy("text-input").should("have.value", "1");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
  it("type an invalid installments", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("abc");
    cy.dataCy("text-input").should("have.value", "0");
  });
  it("type a installments with a negative number", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("-1");
    cy.dataCy("text-input").should("have.value", "1");
  });
  it("type a installments with a decimal number", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("1.5");
    cy.dataCy("text-input").should("have.value", "15");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
  it("type a installments with a length bigger than 12", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("1234567890123");
    cy.dataCy("text-input").should("have.value", "123456789012");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
});
