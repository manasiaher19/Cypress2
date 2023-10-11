///<reference types = "cypress"/>

describe('read data', () => {

    it('read file 1', () => {
        cy.visit('https://www.flipkart.com/')
        cy.readFile('cypress/e2e/Ankit sir/fileData/file3.json').then((el) => {
            cy.get('[type="text"]').type(el.order)  // "order": "Sarees"
        })
    })

    it.only('read file 2', () => {

    })
})