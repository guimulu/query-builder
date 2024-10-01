import { QueryOutput } from "@features/query-output";
import { StyleProvider } from "@styles/index";

describe("<QueryOutput />", () => {
  it("renders the query output", () => {
    cy.mount(
      <StyleProvider>
        <QueryOutput
          queryOutput={`{ "combinator": "AND", "conditions": [] }`}
        />
        ,
      </StyleProvider>,
    );
    cy.dataCy("query-output")
      .should("exist")
      .and("contain.text", '{ "combinator": "AND", "conditions": [] }');
  });

  it("test copy to clipboard functionality", () => {
    cy.window().then((win) => {
      cy.stub(win.navigator.clipboard, "writeText").resolves();
    });

    cy.mount(
      <StyleProvider>
        <QueryOutput
          queryOutput={`{ "combinator": "AND", "conditions": [] }`}
        />
        ,
      </StyleProvider>,
    );

    cy.dataCy("copy-to-clipboard").click();
    cy.assertValueCopiedToClipboard(
      '{ "combinator": "AND", "conditions": [] }',
    );
    cy.window().its("navigator.clipboard.writeText").should("have.been.called");
  });
});
