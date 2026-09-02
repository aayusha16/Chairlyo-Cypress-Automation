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

  it("Verify Branch Dashboard page is displayed", () => {
    cy.url().should("eq", "https://qa02.stage.chairlyo.com/");
  });

  it("Verify Add Branch page opens successfully", () => {
    cy.xpath(selector.AddBranch).filter(":visible").should("have.length", 1).click();
  });

  it("Verify branch is added with all valid required details", () => {

    const branchName = `Grace Salon ${Date.now()}`;
    const slug = `beauty-salon-${Date.now()}`;
    const email = `salon${Date.now()}@gmail.com`;

    cy.xpath(selector.AddBranch).filter(":visible").click();

    cy.get(selector.branchname).type(branchName);
    cy.get(selector.Slug_field).type(slug);

    cy.xpath(selector.country_select).click();
    cy.xpath(selector.country_search).type("Nepal");
    cy.contains("Nepal").should("be.visible").click();

    cy.get(selector.phone_num).first().should("be.visible").type("9870785645");
    cy.get(selector.branch_email).type(email);

    cy.xpath(selector.status).click();
    cy.get('[data-slot="select-content"]').contains("Active").click({ force: true });

    cy.get(selector.branch_address).type("Bhaktapur");

    cy.xpath(selector.timezone).click();
    cy.xpath(selector.timezone_search).type("kathmandu");
    cy.contains("Kathmandu").should("be.visible").click();

    cy.get(selector.AdminFirstName).type("Rosemary");
    cy.get(selector.AdminLastName).type("KC");
    cy.get(selector.AdminEmail).type(`admin${Date.now()}@gmail.com`);
    cy.get(selector.AdminPass).type("Skill@546!");

    cy.xpath(selector.admin_country_select).click();
    cy.xpath(selector.admin_country_search).type("Nepal");
    cy.contains("Nepal").should("be.visible").click();

    cy.get(selector.AdminPhone).last().should("be.visible").type("9860457662");

    cy.xpath(selector.Save_button).click();
  });

  it("Verify validation is displayed when Branch Name is left blank", () => {

    cy.xpath(selector.AddBranch).filter(":visible").click();

    cy.get(selector.Slug_field).type(`test-slug-${Date.now()}`);

    cy.xpath(selector.country_select).click();
    cy.xpath(selector.country_search).type("Nepal");
    cy.contains("Nepal").should("be.visible").click();

    cy.get(selector.phone_num).first().type("9870785645");
    cy.get(selector.branch_email).type(`test${Date.now()}@example.com`);

    cy.xpath(selector.status).click();
    cy.get('[data-slot="select-content"]').contains("Active").click({ force: true });

    cy.get(selector.branch_address).type("Bhaktapur");

    cy.xpath(selector.Save_button).click();

    cy.get(selector.branchname).should("have.value", "");
  });
  

  
});