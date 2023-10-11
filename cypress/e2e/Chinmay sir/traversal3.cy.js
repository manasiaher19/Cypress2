
/// <reference types="Cypress"/>

describe('traversal methods in cypress', function () {
    //siblings()
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.disabled').siblings().should('have.length', 3)
        cy.get('.disabled').siblings().each(function (el) {
            cy.log(el.text())
        })

        cy.get('.active').siblings().should('have.length', 5)
        cy.get('.active').siblings().each(function (el) {
            cy.log(el.text()) 
        })
    })
    //prevAll()
    // it('To get all previous sibling DOM elements within elements, use the .prevAll() command.', function () {
    //     cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
    //     cy.get('#veggie').prevAll().should()('have.length', 6)


    //     let eleFound = false    //flag
    //     cy.get('#veggie').each(function (el) {
    //         if (el.text() === 'Banana') {
    //             eleFound = true
    //         }
    //     }).then(function () {
    //         expect(eleFound).to.eq(true)
    //     })

    //nextAll()
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length', 4)
        cy.get('#veggie').nextAll().each(function (el) {
            cy.log(el.text())
        })
    })

    //nextUntil()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
        cy.get('#fruits').nextUntil('#veggie').each(function (el) {
            cy.log(el.text())
        })
    })

    //prevUntil()
    it.only('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.    ', function () {
        cy.visit('http://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
        cy.get('.sales').prevUntil('.menu').should('have.length', 2)

    })
})














    // it('',function(){

    // })
