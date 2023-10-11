
///<reference types ="Cypress"/>

describe('Traversal mthods', function () {

    it.skip('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('i phone {enter}')
        cy.get('._3879cV').first().should('have.text', 'SAMSUNG')

    })

    it.skip('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').last().should('have.text', '10% or more')

    })

    it.skip('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._3879cV').eq(4).should('have.text', 'Infinix')
    })

    it.skip('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('._2d0we9').first().children().should('have.length', 7)
        cy.get('._2d0we9').first().children().each((el) => {
            cy.log(el.text())
        })

    })

    it.skip('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.get('[class="_4921Z t0pPfW"]').first().next().should('have.text', 'APPLE')
        //cy.get('._3879cV').next().should('have.text','realme')

    })

    it('flipkart', function () {
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone {enter}')
        cy.contains('APPLE iPhone 14 (Midnight, 128 GB)').should('contain','APPLE iPhone 14 (Midni')
    })

})