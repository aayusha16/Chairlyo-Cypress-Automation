import { selector } from "../support/selector";

describe("Chairlyo Branch Add Waiting Functionality", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.get(selector.branch_username).should("be.visible").type(Cypress.env("BRANCH_USERNAME"));
    cy.get(selector.branch_password).should("be.visible").type(Cypress.env("BRANCH_PASSWORD"));
    cy.xpath(selector.login_button).should("be.visible").click();
    cy.xpath(selector.waiting_tab).should("be.visible").click();
    cy.xpath(selector.add_waiting_button).filter(":visible").first().should("be.visible").click();
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  it("Verify Add Waiting Page loads successfully", () => {
    cy.xpath(selector.add_waiting_title).should("be.visible").and("contain.text", "Add Customer To Waiting");
  });

  it("Verify customer search with valid customer name", () => {
    cy.xpath(selector.customer_search).should("be.visible").clear().type("Teresa Lisbon");
    cy.xpath(selector.valid_customer_waiting).filter(":visible").first().should("be.visible").and("contain.text", "Teresa Lisbon");
  });

  it("Verify customer search with invalid customer details", () => {
    cy.xpath(selector.customer_search).should("be.visible").clear().type("aayusha");
    cy.xpath(selector.valid_customer_waiting).should("not.exist");
  });

  it("Verify next button redirects to main add waiting page", () => {
    cy.xpath(selector.customer_search).should("be.visible").clear().type("Teresa Lisbon");
    cy.xpath(selector.valid_customer_waiting).filter(":visible").first().should("be.visible").click();
    cy.xpath(selector.waiting_next_button).should("be.visible").click();
    cy.xpath(selector.add_waiting_title).should("be.visible").and("contain.text", "Add Customer To Waiting");
  });

  it("Verify adding service to customer", () => {
  cy.xpath(selector.customer_search)
    .should("be.visible")
    .clear()
    .type("Teresa Lisbon");

  cy.xpath(selector.valid_customer_waiting)
    .filter(":visible")
    .first()
    .should("be.visible")
    .click();

  cy.xpath(selector.waiting_next_button)
    .should("be.visible")
    .click();

  
  cy.xpath(selector.add_to_waiting_button)
    .filter(":visible")
    .first()
    .should("be.visible")
    .click();
});
});