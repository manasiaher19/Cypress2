///<reference types="Cypress"/>

describe('Fixture day 2', () => {
    let arrObj;
    before(() => {
        cy.fixture('arrObj').then((data) => {
            arrObj = data
        })
    })
    it('Testcase 1', () => {
        arrObj.forEach((el) => {
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsFillData(el.firstName, el.lastName, el.email, el.mobile, el.website, el.companyName, el.message)
            cy.get('submit_button_1').click()
            cy.get('h1').should('be.visible')
        })
    })

    it('Testcase 2', () => {
        arrObj.forEach((el) => {
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsFillData(el.firstName, el.lastName, el.email, el.mobile, el.website, el.companyName, el.message)
            cy.get('submit_button_1').click()
            cy.get('h1').should('be.visible')
        })
    })
})