import { selector } from "../support/selector";

describe("Chairlyo Admin Login Functionality", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(function () {
    if (this.currentTest.state === "failed") {
      cy.log("Failed: " + this.currentTest.title);
    } else {
      cy.log("Passed: " + this.currentTest.title);
    }
  });

  it("Verify Login with valid credentials", () => {

    cy.get(selector.username).type(Cypress.env("USERNAME"));

    cy.get(selector.password).type(Cypress.env("PASSWORD"));

    cy.xpath(selector.login_button).click();

  });

  it("Verify Login with invalid email", () => {

    cy.get(selector.username).type("invalid@gmail.com");

    cy.get(selector.password).type(Cypress.env("PASSWORD"));

    cy.xpath(selector.login_button).click();

  });

  it("Verify Login with invalid password", () => {

    cy.get(selector.username).type(Cypress.env("USERNAME"));

    cy.get(selector.password).type("WrongPassword@123");

    cy.xpath(selector.login_button).click();

  });

  it("Verify Login with empty credentials", () => {

    cy.xpath(selector.login_button) .click();

  });

  it("Verify Login with invalid email format", () => {

    cy.get(selector.username).type("wrongemail");

    cy.get(selector.password).type(Cypress.env("PASSWORD"));

    cy.xpath(selector.login_button).click();

  });

  it("Verify Password visibility icon", () => {

    cy.get(selector.password).type(Cypress.env("PASSWORD"));

    cy.xpath(selector.password_visibility).click();

    

  });

  it("Verify Forgot Password Link", () => {

    cy.xpath(selector.forgot_password).should("be.visible").click();

  });

  it("Verify Login Button", () => {
    cy.xpath(selector.login_button).should("be.visible");

  });

});