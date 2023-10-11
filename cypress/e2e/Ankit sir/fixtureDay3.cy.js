///<reference types="Cypress"/>
import data from '../../fixtures/arrObj.json'
describe('Fixture import method', () => {
    data.forEach((el, index) => {
        it(`testCase ${index} read file using import`, () => {
            cy.visit('https://mediaproper.com/contact-us/')
            cy.contactUsFillData(el.firstName, el.lastName, el.email, el.mobile, el.website, el.companyName, el.message)
            cy.get('submit_button_1').click()
            cy.get('h1').should('be.visible')
        })
    })
})