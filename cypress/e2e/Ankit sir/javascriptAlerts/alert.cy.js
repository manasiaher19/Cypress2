///<reference types = "cypress"/>

describe('javascript alerts', () => {
    /* 1.window.alert()
       2.window.confirm()
       3.window.prompt()
     */

    //window.alert()   
    it('norml js alert', () => {
        cy.on('window:alert', (message) => {
            expect(message).to.eql('I am a JS Alert')
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsAlert()"]').click()
    })


    //confirm alert
    it('confirm alert for ok button', () => {
        cy.on('window:confirm', (message) => {
            expect(message).to.eql('I am a JS Confirm')
            return true
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
    })

    it('confirm alert for cancel button', () => {
        cy.on('window:confirm', (message) => {
            expect(message).to.eql('I am a JS Confirm')
            return false
        })
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get('[onclick="jsConfirm()"]').click()
    })


    //window.prompt()
    it('prompt alert for ok', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('Learning Js')
            cy.get('[onclick="jsPrompt()"]').click()
        })
    })

    it.only('prompt alert for cancel', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns(null)
            cy.get('[onclick="jsPrompt()"]').click()
        })

    })
})