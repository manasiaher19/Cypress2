
///<reference types = "Cypress"/>

describe('traversal methods on flipkart site', function () {

    it('To get children of DOM elements, use the .children() command.', () => {

        cy.visit('https://www.flipkart.com/')
        cy.get('._58bkzq5p _3n8fnarc _3n8fnakj _3n8fnadp _3n8fna1 _3n8fna6v _58bkzqh _1i2djtb9 _1i2djt0')
        .should('have.length',19)

    })
})