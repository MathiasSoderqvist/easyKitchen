/// <reference types="Cypress" />

// TODO: THESE WILL BE SEEDED TO DB, FOR NOW RUN AFTER THE CYPRESS TEST FOR RESTAURANTS
const { testDishes, testOrder, testMenuTitle } = require('./mocks')

describe(`Creating a new order: ${testMenuTitle} `, () => {
  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the User link', () => {
    cy.get('a[data-testid="user-button"]').click();
  })

  it('verifies we are on the user page', () => {
    cy.url().should('include', '/create_order');
    cy.contains('Hi Friend!');
  })

  it(`double clicks on the checkbox for ${testDishes[0].title}`, () => {
    cy.get(`input[type=checkbox][name=${testDishes[0].title}]`).dblclick();
  })

  it(`double clicks on the checkbox for ${testDishes[1].title}`, () => {
    cy.get(`input[type=checkbox][name=${testDishes[1].title}]`).dblclick();
  })

  it('enters name in the "Name" field', () => {
    cy.get('input[placeholder="Name"]').type(testOrder.name);
  })

  it('enters address in the "Address" field', () => {
    cy.get('input[placeholder="Address"]').type(testOrder.address);
  })

  it('enters phone number in the "Phone" field', () => {
    cy.get('input[placeholder="Phone"]').type(testOrder.phone);
  })

  it('enters comments in the "Comments" field', () => {
    cy.get('input[placeholder="Comments"]').type(testOrder.comments);
  })

  it('clicks on submit', () => {
    cy.get('.send-button').click();
  })

  it('hopes that the order is received', () => {
    cy.url().should('include', '/bye');
    cy.contains('Enjoy your Meal!');
  })
})

describe(`Checking the order on restaurant side: ${testMenuTitle} `, () => {
  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the hamburger menu', () => {
    cy.get('button[aria-label="menu"').click();
  })

  it('clicks on "See orders" link', () => {
    cy.contains('See orders').click();
  })

  it('verifies order details:', () => {
    cy.contains(testOrder.name);
    cy.contains(testOrder.name).siblings().contains(testOrder.address);
    cy.contains(testOrder.name).siblings().contains(testOrder.phone);
    cy.contains(testOrder.name).siblings().contains(testOrder.comments);
  })
});