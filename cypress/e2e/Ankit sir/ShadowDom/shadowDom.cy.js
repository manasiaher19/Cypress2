///<reference types = 'cypress'/>

describe('Shadow Dom concept', () => {

    it('Shadow Dom', () => {

        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('[apptitle="BOOKS"]').shadow().find('#input').type('Book')
    })

    it('Shadow Dom 2', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/Ankit%20sir/ShadowDom/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').shadow().find('#name').type('Resolved Shadow Dom')
    })

    it.only('without use of Shadow method', () => {
        //add includeShadowDom:true in cypress.config.js
        cy.visit('http://127.0.0.1:5500/cypress/e2e/Ankit%20sir/ShadowDom/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').find('#name').type('Resolved Shadow Dom')
    })



})