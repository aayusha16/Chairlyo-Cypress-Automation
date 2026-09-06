import { selector } from "../support/selector";

describe("Customer Crud Functionality", () => {

  beforeEach(() => {
    cy.visit("/");
    cy.get(selector.branch_username).type(Cypress.env("BRANCH_USERNAME"));
    cy.get(selector.branch_password).type(Cypress.env("BRANCH_PASSWORD"));
    cy.xpath(selector.login_button).click();
    cy.xpath(selector.management_dropdown).click();
    cy.xpath(selector.customer_option).click();
  });

  it("Verify Customer page loads successfully", () => {
    cy.xpath(selector.customer_page_title).should("be.visible").and("contain.text", "Customer");
  });

  it("Verify Customer can be added with valid credentials", () => {

    const timestamp = Date.now();
    const firstName = `John${timestamp}`;
    const lastName = `Doe${timestamp}`;
    const phone = `98${String(timestamp).slice(-8)}`;
    const email = `john${timestamp}@gmail.com`;
    const dobDate = "15";

    cy.xpath(selector.add_customer_button).filter(":visible").first().should("be.visible").click();

    cy.get(selector.customer_firstname).should("be.visible").type(firstName);
    cy.get(selector.customer_lastname).should("be.visible").type(lastName);

    cy.xpath(selector.country_dropdown).should("be.visible").click();
    cy.xpath(selector.country_search_field).should("be.visible").type("Nepal");
    cy.xpath(selector.country_nepal).should("be.visible").click();

    cy.xpath(selector.phone_number_field).should("be.visible").type(phone);

    cy.get(selector.customer_email).should("be.visible").type(email);

    cy.xpath(selector.gender_dropdown).should("be.visible").click();
    cy.xpath(selector.male_option).filter(":visible").first().should("be.visible").click();

    cy.xpath(selector.date_of_birth_dropdown).should("be.visible").click();
    cy.xpath(`//button[normalize-space()="${dobDate}"]`).should("be.visible").click();

    cy.get(selector.customer_address).should("be.visible").type("Kathmandu");

    cy.xpath(selector.save_changes_button).should("be.visible").click();
  });

  it("Verify customer can be edited successfully", () => {

  cy.xpath(selector.edit_customer_button).first().click();

  cy.get(selector.customer_firstname).clear().type(`Sarah${Date.now()}`);

  cy.get(selector.customer_lastname).clear().type("Burrow");

  cy.get(selector.customer_email).clear().type(`jessy${Date.now()}@gmail.com`);

  cy.get(selector.customer_address).clear().type("Kathmandu, Nepal");

  cy.xpath(selector.edit_save_changes_button).click();

});

it("Verify customer can be deleted successfully", () => {

  cy.xpath(selector.delete_customer_button).first().click({ force: true });

  cy.xpath(selector.delete_customer_input).filter(":visible").should("be.visible").type("Delete");

  cy.xpath(selector.confirm_delete_customer).filter(":visible").should("be.visible").click();

});


});