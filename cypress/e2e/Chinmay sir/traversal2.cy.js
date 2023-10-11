
/// <reference types="Cypress" />

describe('traversal methods in cypress', function () {
    it.only('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)
        cy.get('.traversal-drinks-list').children().each(function (el) {
            cy.log(el.text())
        })
        cy.get('.traversal-drinks-list').should('have.class', 'traversal-drinks-list')
    })

    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().should('have.length', 11)
        cy.get('.traversal-food-list').children().each(function (el) {
            cy.log(el.text())
        })

    })
    //sibling (.next())
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').next().should('have.text', 'Asparagus')
    })
    //.prev()
    it('To get the previous sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prev().should('have.text', 'Figs')
    })
    //.first()
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().first().should('have.text', 'Fruits')
            .and('have.attr', 'id', 'fruits')
            .and('have.class', 'list-header')
            .and('have.id', 'fruits')
    })
    //.last()
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
        //.and('have.attr', 'id', 'veggie') //  assertion error

    }) 
     //.eq()
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().eq(2).should('have.text','Banana')
        cy.get('.traversal-food-list').children().eq(4).should('have.text','Cherries')
    })
})