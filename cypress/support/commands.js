// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('contactUsFillData', (firstName, LastName, email, PhoneNumber, webSite, companyName, msg) => {
    cy.get('#input_1_1').type(firstName)
    cy.get('#input_1_2').type(LastName)
    cy.get('#input_1_3').type(email)
    cy.get('#input_1_4').type(PhoneNumber)
    cy.get('input[placeholder="Website"]').type(webSite)
    cy.get('input[placeholder="Company"]').type(companyName)
    cy.get('textarea[placeholder="What can we do for you?"]').type(msg)

})
//This is for dynamic xpath
Cypress.Commands.add('dynamic xpath', (text) => {
    cy.xpath("//span[text()='$var']".replace('$var', text)).click()
})
//-----------------------------------------------------------------------------------

Cypress.Commands.add('contactUsFillData', (firstName, lastName, email, comments) => {
    cy.get('[name="first_name"]').type(firstName)
    cy.get('[name="last_name"]').type(lastName)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(comments)
})

//---------------------------------------------------------------------------------------


