///<reference types = "Cypress"/>

describe('verify contactus form ', function () {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('verify contact us form with valid input', function () {

        cy.get('input[name="first_name"]').type('Manasi')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('manasiaher123@email.com')
        cy.get('textarea[name="message"]').type('Lerning Cypress!')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.contain', 'Thank You')
    })

    it('verify functionality for reset button', function () {
        cy.get('input[name="first_name"]').type('Manasi')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('manasiaher123@email.com')
        cy.get('textarea[name="message"]').type('Lerning Cypress!')
        cy.get('input[type="reset"]').click()
        cy.get('input[name="first_name"]').type('have.text', '')
        cy.get('input[name="last_name"]').type('have.text', '')
        cy.get('input[name="email"]').type('have.text', '')
        cy.get('textarea[name="message"]').type('have.text', '')

    })

    it('verify contact us form for invalid email', function () {
        cy.get('input[name="first_name"]').type('Manasi')
        cy.get('input[name="last_name"]').type('Aher')
        cy.get('input[name="email"]').type('manasiaher123email.com')
        cy.get('textarea[name="message"]').type('Lerning Cypress!')
        cy.get('input[type="submit"]').click()
        cy.get('body').should('have.contain', 'Error')
    })

    it.only('verify heading & title for page', function () {

        cy.get('h2[name="contactme"]').should('have.text',"CONTACT US").and('be.visible')
        cy.title().should('eq','WebDriver | Contact Us')
    })


})