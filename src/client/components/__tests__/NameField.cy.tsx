import { useState } from "react";

import NameField from "@components/name";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<NameField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "name",
      value: "",
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);
    return (
      <StyleProvider>
        <NameField
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
      .and("have.text", "Invalid Name");
  });
  it("type a valid name", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("name");
    cy.dataCy("text-input").should("have.value", "name");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
  it("type a name with length bigger than 255", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("a".repeat(256));
    cy.dataCy("text-input").should("have.value", "a".repeat(255));
  });
});
