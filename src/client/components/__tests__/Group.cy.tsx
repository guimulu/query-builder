import { useState } from "react";

import GroupComponent from "@components/group";

import { StyleProvider } from "@styles/index";

import { Group } from "@schemas/GroupSchema";
import { Rule } from "@schemas/RuleSchema";

describe("<Group />", () => {
  const WrappedComponent: React.FC<{ root: Group }> = ({ root }) => {
    const [group, setGroup] = useState(root);
    return (
      <StyleProvider>
        <GroupComponent
          group={group}
          onChange={setGroup}
          onRemove={undefined}
        />
      </StyleProvider>
    );
  };
  it("renders a root group component with operator AND", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("select-combinator").should("have.value", "AND");
  });

  it("renders a root group component with operator OR", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "OR",
          conditions: [],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("select-combinator").should("have.value", "OR");
  });

  it("renders a root group component without a remove button", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("remove-group").should("not.exist");
  });

  it("renders a root group component with a rule", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [
            {
              fieldName: "name",
              value: "",
              operation: "EQUAL",
            } as Rule,
          ],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "name");
  });

  it("renders a root group component with a group ", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [
            {
              combinator: "AND",
              subConditions: [],
            },
          ],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("group").should("have.length", 2);
  });

  it("renders a root group component with a group and a rule", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [
            {
              combinator: "AND",
              subConditions: [
                {
                  fieldName: "name",
                  value: "",
                  operation: "EQUAL",
                } as Rule,
              ],
            },
          ],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("group").should("have.length", 2);
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "name");
  });

  it("renders a root group component then add a rule", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [],
        }}
      />,
    );
    cy.dataCy("group").should("exist");

    cy.dataCy("add-rule").click();
    cy.dataCy("rule").should("exist");
  });

  it("renders a root group component with a rule then delete it", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [
            {
              fieldName: "name",
              value: "",
              operation: "EQUAL",
            } as Rule,
          ],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("rule").should("exist");
    cy.dataCy("text-input").should("have.value", "");
    cy.dataCy("select-operation").should("have.value", "EQUAL");
    cy.dataCy("select-fieldName").should("have.value", "name");

    cy.dataCy("remove-rule").click();
    cy.dataCy("rule").should("not.exist");
  });

  it("renders a root group component then add a group", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [],
        }}
      />,
    );
    cy.dataCy("group").should("exist");

    cy.dataCy("add-group").click();
    cy.dataCy("group").should("exist");
  });

  it("renders a root group component with a group then delete it", () => {
    cy.mount(
      <WrappedComponent
        root={{
          combinator: "AND",
          conditions: [
            {
              combinator: "AND",
              subConditions: [],
            },
          ],
        }}
      />,
    );
    cy.dataCy("group").should("exist");
    cy.dataCy("group").should("have.length", 2);

    cy.dataCy("remove-group").click();
    cy.dataCy("group").should("have.length", 1);
  });
});
