///<reference types = "cypress"/>

describe('verify Invoke functionality ', () => {
    it('invoke file 1', () => {
        cy.visit('https://www.amazon.in/')
        cy.get('[type="text"]').type('i phone {enter}')

        //add attribute and value
        cy.get('h2 a').invoke('attr', 'manasi', 'test')


        //get value of attribute
        cy.get('h2 a').invoke('attr', 'class').then((attrval) => {
            cy.log(attrval)
        })

        // cy.get('h2 a').eq(0).invoke('attr', 'class').then((attrval) => {
        //     cy.log(attrval)  //only 0th position 
        // })

        //---------------------------------------------------------------------------------
        //to open result in same tab remove target='blank' attr and value

        cy.get('h2 a').eq(0).invoke('removeAttr', 'target').click()
        cy.get('#landingImage').should('be.visible')
    })

    it.only('invoke 2', () => {
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')

        //add attr & value
        cy.get('._4rR01T').invoke('attr', 'manu', 'text')

        //get value of attr
        cy.get('[class ="_4rR01T"]').eq(0).invoke('attr', 'text').then((attrtxt) => {
            cy.log(attrtxt)
        })

        //remove attr val
        cy.get('[class="_1fQZEK"]').eq(0).invoke('removeAttr', 'target').click()
        cy.get('[loading="eager"]').should('be.visible')
    })
})