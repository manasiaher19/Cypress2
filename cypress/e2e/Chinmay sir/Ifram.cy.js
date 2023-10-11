/// <reference types="Cypress" />

describe('verify iframe in js', function () {

    it.skip('verify functionality for iframe using javascript ', function () {

        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('Home') //error
        cy.get('#frame').then(function (iframe) {
            //cy.log(iframe)
            let bdy = iframe[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href="index.html"]').should('have.text', 'Home')

        })
    })

    it('verify functionality for iframe using jquery', function () {

        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        //cy.contains('Home')
        cy.get('#frame').then(function (iframe) {
            //cy.log(iframe)
            let bdy = iframe.contents().find('body')
            cy.wrap(bdy).as('body')
            cy.get('@body').find('a[href="index.html"]').should('have.text', 'Home')

        })
    })
})
