///<reference types="Cypress"/>

describe('custom Commands', () => {

    it.only('Positive scenario for contactUs', () => {
        cy.visit('https://mediaproper.com/contact-us/')
        cy.contactUsFillData('Kavita', 'Kale', 'kk19@email.com', 9933445566, 'www.kk19.com', 'TestCompny', 'For Test Purpose please ignore!')
        cy.get('.gform_button ').click()
        cy.log('h2').should('have.text','We will be in touch shortly')
    })

    // it.only('Positive scenario for contactUs', () => {
    //     cy.visit('https://mediaproper.com/contact-us/')
    //     cy.contactUsFillData('nikhil', 'aher', 'NA10@email.com', 9933441111, 'www.Naher.com', 'Testing', 'For Test Purpose please ignore!')
    //     cy.get('.gform_button ').click()
    //     cy.log('h1').should('be.visible')
    // })

    it('custom command for dynamic xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('Two Wheelers')
    })

})