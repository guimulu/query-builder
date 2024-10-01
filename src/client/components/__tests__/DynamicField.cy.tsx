import DynamicField from "@components/dynamic-field";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<DynamicField />", () => {
  const WrappedComponent: React.FC<{ rule: Rule }> = ({ rule }) => {
    return (
      <StyleProvider>
        <DynamicField onChange={() => {}} rule={rule} />
      </StyleProvider>
    );
  };

  it("render id field", () => {
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
  });

  it("render name field", () => {
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
  });

  it("render device_ip field", () => {
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
  });

  it("render amount field", () => {
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
  });

  it("render installments field", () => {
    cy.mount(
      <WrappedComponent
        rule={
          {
            fieldName: "installments",
            value: 0,
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
  });

  it("render transaction_state field", () => {
    cy.mount(
      <WrappedComponent
        rule={
          // @ts-expect-error transaction_state is not a string but for tests purposes we want to start with an empty string
          {
            fieldName: "transaction_state",
            value: "",
            operation: "EQUAL",
          } as Rule
        }
      />,
    );
  });
});
