/// <reference types="Cypress" />

const testDishes = [{title: 'cypressito', description: 'those who know, know', price: '5'}, {title: 'cypressilla', description: 'a dish best served in test env.', price: '7'}];
const testMenuTitle = 'GÖTT Deliverygood';

describe(`Creating a new dish: ${testDishes[0].title} `, () => {
  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the hamburger menu', () => {
    cy.get('button[aria-label="menu"').click();
  })

  it('clicks on "Add a dish" link', () => {
    cy.contains('Add a dish').click();
  })

  it('Enters a title in the "Title" field', () => {
    cy.get('input[placeholder="Title"]').type(testDishes[0].title);
  })

  it('Enters a description in the "Description" field', () => {
    cy.get('input[placeholder="Description"]').type(testDishes[0].description);
  })

  it('Enters a price in the "Price" field', () => {
    cy.get('input[placeholder="Price"]').type(testDishes[0].price);
  })

  it('Clicks on submit', () => {
    cy.get('input[aria-label="submit-button"]').click();
  })

  it('Verifies "Dish Created" feedback', () => {
    cy.url().should('include', '/dish_saved');
    cy.contains('Dish has been saved');
  })
})

describe(`Creating a new dish: ${testDishes[1].title} `, () => {

  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the hamburger menu', () => {
    cy.get('button[aria-label="menu"').click();
  })

  it('clicks on "Add a dish" link', () => {
    cy.contains('Add a dish').click();
  })

  it('Enters a title in the "Title" field', () => {
    cy.get('input[placeholder="Title"]').type(testDishes[1].title);
  })

  it('Enters a description in the "Description" field', () => {
    cy.get('input[placeholder="Description"]').type(testDishes[1].description);
  })

  it('Enters a price in the "Price" field', () => {
    cy.get('input[placeholder="Price"]').type(testDishes[1].price);
  })

  it('Clicks on submit', () => {
    cy.get('input[aria-label="submit-button"]').click();
  })

  it('Verifies "Dish Created" feedback', () => {
    cy.url().should('include', '/dish_saved');
    cy.contains('Dish has been saved');
  })
})

describe('Creating a new menu', () => {
  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the hamburger menu', () => {
    cy.get('button[aria-label="menu"').click();
  })

  it('clicks on "Create a menu" link', () => {
    cy.contains('Create a menu').click();
  })

  it(`double clicks on the checkbox for ${testDishes[0].title}`, () => {
    cy.get(`input[type=checkbox][name=${testDishes[0].title}]`).dblclick();
  })

  it(`double clicks on the checkbox for ${testDishes[1].title}`, () => {
    cy.get(`input[type=checkbox][name=${testDishes[1].title}]`).dblclick();
  })

  it(`types ${testMenuTitle} in the menu name field`, () => {
    cy.get(`input[placeholder="Insert Menu name"]`).type(testMenuTitle);
  })

  it('clicks on submit', () => {
    cy.get('input[type="submit"]').click();
  })

  it('verifies "Menu Created" feedback', () => {
    cy.url().should('include', '/menu_saved');
    cy.contains('Menu has been saved');
  })
})

describe('Checking out the new menu in "See menus" section', () => {
  it('visits the Happy Kitchen app', () => {
    cy.visit(`http://localhost:3000`);
  })

  it('verifies we are on the home page', () => {
    cy.contains('Let\'s cook!');
  })

  it('clicks on the hamburger menu', () => {
    cy.get('button[aria-label="menu"').click();
  })

  it('clicks on "See menus" link', () => {
    cy.contains('See menus').click();
  })

  it('verifies that the new menu appears in the list', () => {
    cy.contains(testMenuTitle);
  })

  it('verifies that the new menu consists of correct dishes', () => {
    cy.contains(testMenuTitle).siblings().contains(testDishes[0].title);
    cy.contains(testMenuTitle).siblings().contains(testDishes[1].title);
    cy.contains(testMenuTitle).siblings().should('have.length', 2);
  })
});

