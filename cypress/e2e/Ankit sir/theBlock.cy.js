//Interview ask que

///<reference types = "cypress"/>
//then() => when you want to find single elements use then()


describe('Block', () => {

    it('the block', () => {
        cy.visit('https://www.flipkart.com/')
        cy.contains('Become a Seller').then((el) => {
            cy.log(el.text())
        })
        // cy.xpath("//a[text()='Become a Seller']").then((el) => {
        //     cy.log(el.text())
        // })
    })

    it('the block 2', () => {
        cy.visit('https://www.flipkart.com/')
        //1
        // cy.get('._28p97w').then((el)=>{
        //     cy.log(el.text())
        // })

        //2
        // cy.get('.exehdJ').then((el) => {
        //     cy.log(el.text())
        // })

    })

    it.only('the Block 3', () => {
        cy.visit('https://www.flipkart.com/')
        //1
        //  cy.get('.eFQ30H').then((el)=>{
        //     cy.log(el.text())
        //  })

        //2
        // cy.contains('Two Wheelers').then((el) => {
        //     cy.log(el.text())
        // })

        //3
        cy.xpath('//*[text()="Two Wheelers"]').then((el) => {
            cy.log(el.text())
        })
    })
})