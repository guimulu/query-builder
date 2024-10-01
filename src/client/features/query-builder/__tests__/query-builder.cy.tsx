import QueryBuilder from "@features/query-builder";
import { StyleProvider } from "@styles/index";

describe("<QueryBuilder />", () => {
  it("should display the query builder", () => {
    cy.mount(
      <StyleProvider>
        <QueryBuilder />
      </StyleProvider>,
    );
  });

  it("should display the query builder with a group", () => {
    cy.mount(
      <StyleProvider>
        <QueryBuilder />
      </StyleProvider>,
    );
    cy.dataCy("group").should("exist");
  });

  it("should click on the submit button", () => {
    cy.mount(
      <StyleProvider>
        <QueryBuilder />
      </StyleProvider>,
    );
    cy.dataCy("submit").click();
  });

  it("should click on the cancel button", () => {
    cy.mount(
      <StyleProvider>
        <QueryBuilder />
      </StyleProvider>,
    );
    cy.dataCy("cancel").click();
  });
});
