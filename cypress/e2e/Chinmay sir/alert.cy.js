///<reference types ="Cypress"/>

describe('Js alert', function () {
    beforeEach(function () {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    //Normal alert
    it('Normal js alert', function () {

        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })
    //Confirm alert (OK/Cancel)
    it('Js onfirm alert with Ok', function () {
        cy.on('window:alert', function (str) {
            expect(str).to.eql('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', "You clicked: Ok")
    })

    it('js confirm alert with cancel', function () {
        cy.on('window:confirm', function (str) {
            expect(str).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', "You clicked: Cancel")

    })
    //Prompt alert (OK/Cancel)

    it('Js prompt with ok', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('Learning Js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: Learning Js')
    })

    it('Js prompt with cancel', function () {
        cy.window().then(function (win) {
            cy.stub(win, 'prompt').returns('Learning Js')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', "You entered: null")
    })

})