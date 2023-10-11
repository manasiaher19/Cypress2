///<reference types ="Cypress"/>

describe('validate get ,post & put comment', function () {

    it('verify post comment functionality', function () {

        cy.intercept(
            //request
            {
                method: 'POST',
                url: 'https://jsonplaceholder.cypress.io/comments'
            }
        ).as('PostComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@PostComment').then(function ({ request, response }) {

            cy.log(response)
            expect(request.method).to.eql('POST')
            expect(response.statusCode).to.eql(201)
            expect(response.body).to.have.keys('body', 'email', 'id', 'name')
            expect(response.body.id).to.eql(501)
            cy.get('.network-post-comment').should('have.text', 'POST successful!')

        })
    })

    it.only('verify put comment functionallity', function () {
        let message = 'whoa, this comment does not exist'
        cy.intercept(
            //request
            {
                method: 'PUT',
                url: '**/comments/*'
            },
            //response
            {
                statusCode: 404,
                body: { error: message },
                headers: { 'access-control-allow-origin': '*' },
                delayMs: 500,
            }
        ).as('putComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@putComment').then(function (obj) {
            //cy.log(obj)
            expect(obj.response.body.error).to.eql(message)
        })

    })
})