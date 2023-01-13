/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example to-do app", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit(`http://localhost:4000/projects/14996418/todo-lists`);

    cy.get('input[data-fx-name="email"]').type("fpujols+7@webfx.com");
    cy.get('input[data-fx-name="password"]').type("BestClient!2021");
    cy.get('button[data-fx-name="submit"]').click();
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });

  it("displays two todo items by default", () => {
    cy.contains("Automation cypress test project #1").should("be.visible");
  });
});
