///<reference types = 'cypress'/>

describe('Verify Iframe in Cypress ', () => {

    beforeEach(() => {
        cy.visit('https://jqueryui.com/checkboxradio/')
    })

    it('verify Iframe using jquery ', () => {

        //cy.get('#radio-1').check().should('be.checked') ---it is inside Iframe so can not check directly
        cy.get('[class="demo-frame"]').then(($frame) => {

            //console.log($frame)
            let body = $frame.contents().find('body')
            cy.wrap(body).as('bdy') // alise=as('bdy') 
            cy.get('@bdy').find('#radio-1').check({ force: true }).should('be.checked')

        })

    })

    it('verify Iframe using jquery-2', () => {
        cy.get('[class="demo-frame"]').then(($frame) => {
            //console.log($frame)  --- iframe-contentDocument-body
            let body = $frame.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('#checkbox-1').check({ force: true }).should('be.checked')
            cy.get('@bdy').find('#checkbox-1').click({ force: true }).should('not.be.checked')

            cy.get('@bdy').find('#checkbox-2').check({ force: true }).should('be.checked')
        })
    })


    it('verify Iframe using javascript', () => {

        cy.get('[class="demo-frame"]').then((frame) => {
            let body = frame[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('#radio-3').check({ force: true }).should('be.checked')
        })
    })

    it.only('verify Iframe using jquery-2', () => {
        cy.get('[class="demo-frame"]').then(($frame) => {
            //console.log($frame)  --- iframe-contentDocument-body
            let body = $frame[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').find('#checkbox-1').check({ force: true }).should('be.checked')
            cy.get('@bdy').find('#checkbox-1').click({ force: true }).should('not.be.checked')

            cy.get('@bdy').find('#checkbox-2').check({ force: true }).should('be.checked')
        })
    })
})
