///<reference types = "Cypress"/>

describe('Hooks', () => {

    before('I Execute once before exicute of all test cases ', () => {
        cy.log('I am from Before block!')
    })

    beforeEach('I Execute beforeEach test case', () => {
        cy.log("I'm From beforEach block!")
    })

    after('I Exicute only once after exicution of all test cases', () => {
        cy.log("I'm From after block!")
    })

    afterEach('I exicute after each & every test cases', () => {
        cy.log("I'm From afterEach block!")
    })

    it('it block-1', () => {
        cy.log('it block no' + 1)
        cy.screenshot() //to capture screenshot in cypress
    })

    it('it block-2', () => {
        cy.log('it block no' + 2)

    })
    it('it block-3', () => {
        cy.log('it block no' + 3)

    })
    it('it block-4', () => {
        cy.log('it block no' + 4)

    })
})