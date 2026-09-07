import { selector } from "../support/selector";

describe("Chairlyo Billing & Payments Functionality", () => {

  beforeEach(() => {

    cy.visit("/");
    cy.get(selector.branch_username) .type(Cypress.env("BRANCH_USERNAME"));
    cy.get(selector.branch_password).type(Cypress.env("BRANCH_PASSWORD"));
    cy.xpath(selector.login_button).click();
 
    cy.xpath(selector.billing_dropdown)
      .click();

    cy.xpath(selector.billing_submenu)
      .click();
  });

  it("Verify Billing page loads successfully", () => {

  cy.xpath(selector.billing_title)
    .should("be.visible")
    .and("contain.text", "Billing & Payments");

});

   it("Verify billing search with valid customer name", () => {

  cy.xpath(selector.billing_search) .type("Teresa Lisbon");
  cy.contains("Teresa Lisbon").should("be.visible");

});
    
   it("Verify billing search with invalid customer name", () => {
   cy.xpath(selector.billing_search).type("Aayusha");
   cy.contains("Aayusha").should("be.visible");

});

it("Verify bill status filter for Paid bills", () => {
  cy.xpath(selector.bill_status_filter) .click();
  cy.xpath(selector.paid_filter) .click();

});

it("Verify bill status filter for Pending bills", () => {

  cy.xpath(selector.bill_status_filter) .click();
  cy.xpath(selector.pending_filter).click();
});


it("Verify payment can be processed", () => {
  cy.xpath(selector.bill_status_filter) .click();
  cy.xpath(selector.pending_filter).click();
  cy.xpath(selector.make_payment) .click();
 cy.xpath(selector.process_button)
  .should("be.visible")
  .click();

});

});