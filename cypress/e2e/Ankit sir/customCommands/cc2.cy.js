///<reference types ="cypress"/>

describe('custome command 2', () => {

    it('positive scenario for contact us form', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.contactUsFillData('Janhavi', 'Kale', 'jk13@email.com', 'For test Perpose')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
    })

    it.only('second positive scenario for contact us form', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.contactUsFillData('Omi', 'Singh', 'om13@email.com', 'For test Perpose')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('be.visible')
    })

    it('invalide email scenario for contact us',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.contactUsFillData('Janhavi', 'Kale', 'jk13email.com', 'For test Perpose')
        cy.get('[type="submit"]').click()
        cy.get('body').should('be.visible')
    })

    it('Scenario for reset',()=>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.contactUsFillData('Janhavi', 'Kale', 'jk13@email.com', 'For test Perpose')
        cy.get('[type="reset"]').click()
    })

})