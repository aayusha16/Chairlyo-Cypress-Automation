import { selector } from "../support/selector";

describe("Chairlyo Branch Add Session Functionality", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.get(selector.branch_username).type(Cypress.env("BRANCH_USERNAME"));
    cy.get(selector.branch_password).type(Cypress.env("BRANCH_PASSWORD"));
    cy.xpath(selector.login_button).click();
    cy.xpath(selector.session_tab).should("be.visible").click();
    cy.xpath(selector.new_session_button).filter(":visible").should("have.length", 1).click();
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  it("Verify Add Session Page loads successfully", () => {
    cy.xpath(selector.session_customer_search).should("be.visible");
  });

  it("Verify customer search with valid customer name", () => {
    cy.xpath(selector.session_customer_search).should("be.visible").type("Lisbon Teresa");
  });

  it("Verify customer search with invalid customer details", () => {
    cy.xpath(selector.session_customer_search).should("be.visible").type("aayusha");
  });

  it("Verify Next button redirects to Add Session page", () => {
    cy.xpath(selector.session_customer_search).should("be.visible").type("Lisbon Teresa");
    cy.xpath(selector.session_customer_option).should("be.visible").click();
    cy.xpath(selector.session_next_button).should("be.visible").click();
    cy.xpath(selector.add_first_service).should("exist");
  });
 it("Verify adding service to customer", () => {
    cy.xpath(selector.session_customer_search).should("be.visible").type("Lisbon Teresa");
    cy.xpath(selector.session_customer_option).should("be.visible").click();
    cy.xpath(selector.session_next_button).should("be.visible").click();
    cy.xpath(selector.add_first_service).should("exist").click({ force: true });
    cy.xpath(selector.service_search).should("exist").click({ force: true }).type("Hair salon", { force: true });
    cy.xpath(selector.service_option).should("exist").click({ force: true });
    cy.xpath(selector.done_button).should("exist").click({ force: true });
    cy.xpath(selector.select_staff).should("have.length", 1).click();
    cy.xpath(selector.staff_option).filter(":visible").first().click();
    cy.xpath(selector.add_to_session_button).first().click();
  });
 

});