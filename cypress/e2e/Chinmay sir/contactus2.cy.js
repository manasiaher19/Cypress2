///<reference types = "Cypress"/>

describe('ContactUS Form', function () {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })


    it('verify contactus form with submit', function () {

        cy.get('input[name="first_name"]').type('Nikita')
        cy.get('input[name="last_name"]').type('Kale')
        cy.get('input[name="email"]').type('Nikita.kale01@email.com')
        cy.get('textarea[name="message"]').type('Learning Cypress!')
        cy.get('input[value="SUBMIT"').click()
        cy.get('h1').should('have.contain', 'Thank You')
    })

    it('verify contactus form with reset', function () {

        cy.get('input[name="first_name"]').type('Nikita')
        cy.get('input[name="last_name"]').type('Kale')
        cy.get('input[name="email"]').type('Nikita.kale01@email.com')
        cy.get('textarea[name="message"]').type('Learning Cypress!')
        cy.get('input[value="RESET"]').click()
        cy.get('input[name="first_name"]').should('have.text', '')
        cy.get('input[name="last_name"]').should('have.text', '')
        cy.get('input[name="email"]').should('have.text', '')
        cy.get('textarea[name="message"]').should('have.text', '')

    })

    it('verify contactus form for invalid email', function () {

        cy.get('input[name="first_name"]').type('Nikita')
        cy.get('input[name="last_name"]').type('Kale')
        cy.get('input[name="email"]').type('Nikita.kale email.com')
        cy.get('textarea[name="message"]').type('Learning Cypress!')
        cy.get('input[value="SUBMIT"').click()
        cy.get('body').should('have.contain', 'Error')
    })

    it.only('verify heading & title for page', function () {
        cy.get('.section_header').should('have.text', 'CONTACT US').and('be.visible')
        cy.title().should('eq', 'WebDriver | Contact Us')
    })

})