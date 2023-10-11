///<reference types ="Cypress"/>

describe('Traversal methods in cypress', function () {

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('https://www.flipkart.com/')
        //hardCoded or fixed wait
        //implicit wait
        //cy.wait(5000)
        //Explicit wait cy.intercept()
        cy.get('._331-kn', { timeout: 10000 }).nextAll().should('have.length', 3)
        cy.get('._331-kn').nextAll().each(function (el) {
            cy.log(el.text())
        })

        it.skip('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
            cy.visit('https://www.flipkart.com/')
            // cy.get('[aria-label="Mobiles"]').nextUntil('[aria-label="Appliances"]')
            //     .should('have.length', 3)

            cy.get('._3704LK').type('I phone {enter}')


        })
    })
})