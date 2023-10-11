///<reference types ="Cypress"/>

describe('verify Get,Post,Put comments', function () {

    //Get
    it.skip('verify Get comment functionality', function () {

        // incorrect way , we need to wait for api response
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.get('.btn-primary').should('be.visible')
        cy.get('.network-comment').should('have.contain', 'laudantium enim')
    })


    it.skip('verify Get comment functionality', function () {

        cy.intercept(
            //request
            {
                method: 'GET',
                url: 'https://jsonplaceholder.cypress.io/comments/1'
            }
        ).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment')
        cy.get('.btn-primary').should('be.visible')
        cy.get('.network-comment').should('have.contain', 'laudantium enim')


    })

    it.skip('verify Get comment functionality', function () {

        cy.intercept(
            {
                //request
                method: 'GET',
                url: 'https://jsonplaceholder.cypress.io/comments/1'

            }
        ).as('GetComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@GetComment').then(function ({ request, response }) {
            //cy.log(request)
            expect(response.statusCode).to.eql(200)
            expect(response.body.body)
            //cy.get('.network-comment').should('have.contain', 'laudantium enim')
            cy.get('.network-comment').should('have.text', response.body.body)

            expect(response.body).to.have.keys('postId', 'id', 'name', 'email', 'body')
            expect(response.body.id).to.eql(1)
            expect(response.body.name).to.eql('id labore ex et quam laborum')
        })


    })

    //Post

    it.skip('verify Post comment functionality', function () {

        cy.intercept(
            //request
            {
                method: 'POST',
                url: 'https://jsonplaceholder.cypress.io/comments'
            },

        ).as('postComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@postComment').then(function ({ request, response }) {
            expect(response.statusCode).to.eql(201)
            expect(response.body).to.have.keys('name', 'email', 'body', 'id')
            expect(response.body.id).to.eql(501)

            cy.get('.network-post-comment').should('have.text', 'POST successful!')
        })
    })

    //Put

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