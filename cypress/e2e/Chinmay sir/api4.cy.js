///<reference types ="Cypress"/>

//token => 2e593aa563a098774c377c134f8a4f767454c26f6f7a7fdbf2db63238dcbd1d3
//create user
//update same user
//delete same user

describe('Verify end to end flow', function () {

    it('Verify the create,update,delete user', function () {
        let tokenV = `2e593aa563a098774c377c134f8a4f767454c26f6f7a7fdbf2db63238dcbd1d3`
        let id;

        //create user
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.${Math.floor(Math.random() * 100000)}.ramakrishna@15ce.com`,
                status: "active"
            },
            headers:
            {
                Authorization: `Bearer ${tokenV}`
            }
        })
            .then(function (response) {
                //cy.log('response')
                expect(response.status).to.eql(201)
                expect(response.body).to.have.property('id')

                expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])

                id = response.body.id
                return id
            })

            //Update user
            .then(function (id) {
                cy.request({
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    method: 'PATCH',
                    body: {
                        name: "Tenali Ramakrishna",
                        email: `tenali.${Math.floor(Math.random() * 100000)}.ramakrishna@15ce.com`,
                        status: "active"
                    },
                    headers:
                    {
                        Authorization: `Bearer ${tokenV}`
                    }
                })
                    .then(function (response) {
                        //cy.log('response')
                        expect(response.status).to.eql(200)
                        expect(response.body).to.have.keys(["id", "name", "email", "gender", "status"])
                    })

                    //Delete user
                    .then(function () {
                        cy.request({
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            method: 'DELETE',
                            headers:
                            {
                                Authorization: `Bearer ${tokenV}`
                            }
                        })
                            .then(function (response) {
                                expect(response.status).to.eql(204)
                            })
                    })
            })
    })
})