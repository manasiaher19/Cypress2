///<reference types ="Cypress"/>

describe('validate get ,post & update comment', function () {

    it('verify get comment functionality', function () {
        // incorrect way , we need to wait for api response
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        //cy.get('.btn-primary').should('be.visible')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium enim')
    })



    it('verify get comment functionality', function () {

        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment')
        cy.get('.network-comment').should('be.visible')
        cy.get('.network-comment').should('contain', 'laudantium enim')
    })



    it.only('verify get comment functionality', function () {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ request, response }) {
            expect(response.statusCode).to.eql(200)
            expect(response.body.body)
            cy.get('.network-comment').should('have.text', response.body.body)
        })
    })
})