/// <reference types="Cypress" />

describe('traversal methode in cypress', function () {
  it('To get children of DOM elements, use the .children() command.', function () {
    //opening the url in browser
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('.traversal-food-list').children().should('have.length', 11)
    cy.get('.traversal-food-list').should('have.class', 'traversal-food-list')
  })

  it('To get the next sibling DOM element within elements, use the .next() command.', function () {
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#fruits').next().should('have.text', 'Apple')

  })
  it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
    cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    cy.get('#veggie').prev().should('have.text', 'Figs')
  })

})
