export const searchInput = () => cy.get('[data-testid="search-input"]');
export const leftSortOption = () => cy.get('[data-testid="sort-option_btn"]');
export const productList = () => cy.get('[data-testid="product-list"]');

describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:9999/.netlify/functions/products').as('fetchProducts');
  });

  it('passes', () => {
    cy.visit('http://localhost:3000/')
    leftSortOption().should('be.visible');
    searchInput().type(97);

    productList().children().should('have.length', 3)
  })
})