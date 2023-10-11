///<reference types ="Cypress"/>

describe('X path',()=>{

    it('General path',()=>{
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.xpath('traversal-food-list').should('have.length',11)
        
    })
})