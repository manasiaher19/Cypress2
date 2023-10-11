///<reference types="Cypress"/>

describe('Looping on elements', () => {

    it('Lopping on ele (amazon)', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('i phone {enter}')
        cy.get('h2 a').each((el) => {
            //cy.log(el.text())
            if (el.text().includes('Grocery')) {
                cy.wrap(el).click()
                return false
            }

        })
    })

    it('looping on ele(flipcard)',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('.eFQ30H').each((el)=>{
            //cy.log(el.text())
            if(el.text().includes('Fashion')){
                cy.wrap(el).click
                return false
            }
        })
    })

    

})