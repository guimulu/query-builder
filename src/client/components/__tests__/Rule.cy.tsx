import RuleComponent from "@components/rule";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<Rule />", () => {
  const WrappedComponent: React.FC<{ rule: Rule }> = ({ rule }) => {
    return (
      <StyleProvider>
        <RuleComponent onChange={() => {}} rule={rule} onRemove={() => {}} />
      </StyleProvider>
    );
  };
  it("renders a rule component with fieldName Name", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "name",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "name");
  });

  it("renders a rule component with fieldName Id", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "id",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "id");
  });

  it("renders a rule component with fieldName Device IP", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "device_ip",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "device_ip");
  });

  it("renders a rule component with fieldName Amount", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "amount",
            value: {
              amount: 0,
              currency: "BRL",
            },
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "0");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "amount");
  });

  it("renders a rule component and change operation to NOT_EQUAL", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "name",
            value: "",
            operation: "NOT_EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("rule").should("exist");
    cy.dataCy("select-operation").select("NOT_EQUAL");
    cy.dataCy("select-operation").should("have.value", "NOT_EQUAL");
  });

  it("renders a rule component and change operation to LESS_THAN", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "name",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("select-fieldName").select("installments");
    cy.dataCy("select-operation").select("LESS_THAN");
    cy.dataCy("select-operation").should("have.value", "LESS_THAN");
  });

  it("renders a rule component and change operation to GREATER_THAN", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "name",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
    cy.dataCy("select-fieldName").select("installments");
    cy.dataCy("select-operation").select("GREATER_THAN");
    cy.dataCy("select-operation").should("have.value", "GREATER_THAN");
  });
});
