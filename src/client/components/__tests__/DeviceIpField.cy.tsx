import { useState } from "react";

import DeviceIpField from "@components/device-ip";

import { StyleProvider } from "@styles/index";

import { Rule } from "@schemas/RuleSchema";

describe("<DeviceIpField />", () => {
  const WrappedComponent = () => {
    const [rule, setRule] = useState<Rule>({
      fieldName: "device_ip",
      value: "",
      operation: "EQUAL",
    });
    const [isValueValid, setIsValueValid] = useState(false);
    return (
      <StyleProvider>
        <DeviceIpField
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
      .and("have.text", "Invalid IP");
  });
  it("type a valid ip", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("192.168.0.1");
    cy.dataCy("text-input").should("have.value", "192.168.0.1");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
  it("type an invalid ip", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("123");
    cy.dataCy("text-input").should("have.value", "123");
    cy.dataCy("text-input-error")
      .should("be.visible")
      .and("have.text", "Invalid IP");
  });
  it("type a ip with a range bigger than 255", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("192.168.0.256");
    cy.dataCy("text-input").should("have.value", "192.168.0.255");
    cy.dataCy("text-input-error").should("not.be.visible");
  });
  it("type a ip with characters", () => {
    cy.mount(<WrappedComponent />);
    cy.dataCy("text-input").type("abc");
    cy.dataCy("text-input").should("have.value", "0");
    cy.dataCy("text-input-error")
      .should("be.visible")
      .and("have.text", "Invalid IP");
  });
});
