import { useState } from "react";

import IdField from "@components/id";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<IdField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "id",
      value: "",
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);

    return (
      <StyleProvider>
        <IdField
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
      .and("have.text", "Invalid ID");
  });

  it("type a valid id", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("123");
    cy.dataCy("text-input").should("have.value", "123");
    cy.dataCy("text-input-error").should("not.be.visible");
  });

  it("type id with length bigger than 255", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("a".repeat(256));
    cy.dataCy("text-input").should("have.value", "a".repeat(255));
  });
});
