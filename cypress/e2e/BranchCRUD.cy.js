import { selector } from "../support/selector";

describe("Chairlyo Add Branch Functionality", () => {

  beforeEach(() => {
    cy.visit("/");

    cy.get(selector.username).type(Cypress.env("USERNAME"));
    cy.get(selector.password).type(Cypress.env("PASSWORD"));
    cy.xpath(selector.login_button).click();
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  it("Verify branch is added with all valid required details", () => {

    const branchName = `Gracie ${Date.now()}`;
    const slug = `beauty-salon-${Date.now()}`;
    const email = `salon${Date.now()}@gmail.com`;
    const adminEmail = `admin${Date.now()}@gmail.com`;
    const branchPhone = `98${Math.floor(10000000 + Math.random() * 90000000)}`;
    const adminPhone = `97${Math.floor(10000000 + Math.random() * 90000000)}`;

    cy.xpath(selector.AddBranch).filter(":visible").click();

    cy.get(selector.branchname).type(branchName);
    cy.get(selector.Slug_field).type(slug);

    cy.xpath(selector.country_select).click();
    cy.xpath(selector.country_search).type("Nepal");
    cy.contains("Nepal").should("be.visible").click();

    cy.get(selector.phone_num).first().should("be.visible").type(branchPhone);
    cy.get(selector.branch_email).type(email);

    cy.xpath(selector.status).click();
    cy.get('[data-slot="select-content"]').contains("Active").click({ force: true });

    cy.get(selector.branch_address).type("Bhaktapur");

    cy.xpath(selector.timezone).click();
    cy.xpath(selector.timezone_search).type("kathmandu");
    cy.contains("Kathmandu").should("be.visible").click();

    cy.get(selector.AdminFirstName).type("Rosemary");
    cy.get(selector.AdminLastName).type("KC");
    cy.get(selector.AdminEmail).type(adminEmail);
    cy.get(selector.AdminPass).type("Skill@546!");

    cy.xpath(selector.admin_country_select).click();
    cy.xpath(selector.admin_country_search).type("Nepal");
    cy.contains("Nepal").should("be.visible").click();

    cy.get(selector.AdminPhone).last().should("be.visible").type(adminPhone);

    cy.xpath(selector.Save_button).click();
  });

  it("Verify branch can be edited successfully", () => {

  cy.xpath(selector.edit_branch).first().click();
  cy.get(selector.branchname).clear().type("Grace Salon Updated");
  cy.get(selector.Slug_field).clear().type(`grace-salon-updated-${Date.now()}`);
  cy.get(selector.phone_num).first().clear().type("9841234567");
  cy.get(selector.branch_email).clear().type(`updated${Date.now()}@gmail.com`);
  cy.get(selector.branch_address).clear().type("Kathmandu, Nepal");

  cy.xpath(selector.Save_button).click();

});

it("Verify branch can be deleted successfully", () => {

  cy.xpath(selector.delete_branch).first().click({ force: true });

  cy.xpath(selector.delete_branch_input).filter(":visible").should("be.visible").type("Delete Branch");

  cy.xpath(selector.confirm_delete_branch).filter(":visible").should("be.visible").click();

});
});