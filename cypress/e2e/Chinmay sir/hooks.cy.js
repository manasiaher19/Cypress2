/// <reference types ="Cypress"/>

// describe('hooks in cypress', function () {

//     before(function () {
//         cy.log('I will run first')
//     })
//     after(function () {
//         cy.log('I will run last')
//     })

//     it('Testcase one',function(){
//           cy.log('Testcase one')
//     })
// })

//=============================================================

describe('hooks in cypress', function () {

    before(function () {
        cy.log('I will run first')
    })

    beforeEach(function () {
        cy.log('I will before each testcase')
    })
    afterEach(function () {
        cy.log('I will after each testcase')
    })
    // after(function () {
    //     cy.log('I will run last')
    // })

    it('Testcase one', function () {
        cy.log('Testcase one')
    })

    it('Testcase two', function () {
        cy.log('Testcase two')
    })
    
    after(function () {
        cy.log('I will run last')
    })
})