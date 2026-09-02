import { selector } from "../support/selector";

describe("Chairlyo Branch Add Waiting Functionality", () => {

  beforeEach(() => {

    cy.visit("/");

    cy.get(selector.branch_username).type(Cypress.env("BRANCH_USERNAME"));
    cy.get(selector.branch_password).type(Cypress.env("BRANCH_PASSWORD"));
    cy.xpath(selector.login_button).click();

    cy.xpath(selector.waiting_tab) .should("be.visible").click();

    cy.xpath(selector.add_waiting_button)
      .filter(":visible").should("have.length", 1) .click();

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

  it("Verify customer search with valid customer phone number", () => {

  cy.xpath(selector.customer_search) .should("be.visible") .type("Van Pelt Teresa");
});

  it("Verify customer search with invalid customer details", () => {

  cy.xpath(selector.customer_search)
    .should("be.visible")
    .type("aayusha ");

});

  it("Verify next button redirects to main add waiting page", () => {

  cy.xpath(selector.customer_search).should("be.visible").type("Van Pelt Teresa");
  cy.xpath(selector.valid_customer_waiting).should("be.visible").click();
  cy.xpath(selector.waiting_next_button).should("be.visible") .click();
  cy.xpath(selector.add_waiting_title).should("be.visible")
  .and("contain.text", "Add Customer To Waiting");

});


  it("Verify adding service to customer",()=>{

    cy.xpath(selector.customer_search) .should("be.visible") .type("Van Pelt Teresa");
    cy.xpath(selector.valid_customer_waiting).should("be.visible").click();
    cy.xpath(selector.waiting_next_button) .should("be.visible") .click();
    cy.xpath(selector.add_waiting_title) .should("be.visible")
    .and("contain.text", "Add Customer To Waiting");
    cy.xpath(selector.add_another_service).click();

   cy.xpath(selector.service_name) .should("have.length", 2) .first().click();
   cy.xpath(selector.done_button) .should("have.length", 1).click();

   cy.xpath(selector.assign_staff_dropdown) .should("have.length", 1).click();

  cy.xpath(selector.staff_option) .filter(":visible") .first().click();

  cy.xpath(selector.add_to_waiting_button).first() .click();

  })
});