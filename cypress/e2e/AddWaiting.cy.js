import { selector } from "../support/selector";

describe("Chairlyo Branch Add Waiting Functionality", () => {

  beforeEach(() => {

    cy.visit("/");

    cy.get(selector.branch_username)
      .type(Cypress.env("BRANCH_USERNAME"));

    cy.get(selector.branch_password)
      .type(Cypress.env("BRANCH_PASSWORD"));

    cy.xpath(selector.login_button)
      .click();

    cy.xpath(selector.waiting_tab)
      .should("be.visible")
      .click();

    cy.xpath(selector.add_waiting_button)
      .filter(":visible")
      .should("have.length", 1)
      .click();

  });


  afterEach(function () {

    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }

  });


  it("Verify Add Waiting Page loads successfully", () => {

    cy.xpath(selector.add_waiting_title)
      .should("be.visible")
      .and("contain.text", "Add Customer To Waiting");

  });

});