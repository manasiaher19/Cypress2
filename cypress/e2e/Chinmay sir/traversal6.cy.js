///<reference types="Cypress"/>

describe('traversal methods in cypress', function () {

    it('children method', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().should('have.length', 5)

        //cy.contains('Fruits').should('be.visible') //Fruits visible 
    })

    it.only('next element', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //assertion 1
        cy.get('#fruits').next().should('have.text', 'Apple')

        //assersion 2
        cy.get('#fruits').next().should('have.contain', 'Apple')

        //asser 3
        cy.contains('Fruits').should('have.contain', 'Fru')

        //asser 4
        cy.get('#fruits').next().then(function (el) {
            expect(el.text()).to.be.equal('Apple')
        })

        //aeer 5
        cy.get('#fruits').next().invoke('text').then((text) => {
            expect(text).to.eql('Apple')
        })

    })

    //nextAll()
    it('nextAll element', function () {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        //asser 1
        cy.get('#fruits').nextAll().should('have.length', 10)

        //only find Blackberries
        cy.get('#fruits').nextAll().each(function (el) {
            if (el.text() == 'Blackberries') {
                cy.wrap(el).should('be.visible')

                cy.wrap(el).should('exist')
            }
        })

    })



})