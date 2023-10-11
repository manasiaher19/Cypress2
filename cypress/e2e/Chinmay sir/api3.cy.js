///<reference types ="Cypress"/>


//token => 2e593aa563a098774c377c134f8a4f767454c26f6f7a7fdbf2db63238dcbd1d3
//create user
//update same user
//delete same user

describe('Verify e2e flow', function () {

    it('verify the create,update & delete user', function () {

        let tokenV = `2e593aa563a098774c377c134f8a4f767454c26f6f7a7fdbf2db63238dcbd1d3`
        let id = null;
        //create user
        cy.request({
            url: 'https://gorest.co.in/public/v2/users',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${tokenV}`
            },
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `tenali.${Math.floor(Math.random() * 100000)}ramakrish122na@ce.com`,
                status: "active"
            }
        })
            .then(function (response) {
                //cy.log('response')
                expect(response.status).to.eql(201)
                expect(response.body).to.have.property('id')
                id = response.body.id
                return id

            })
            //Update user
            .then(function (id) {
                cy.request({
                    method: 'PATCH',
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        Authorization: `Bearer ${tokenV}`
                    },
                    body: {
                        name: "Tenali Ramakrishna",
                        email: `tenali.${Math.floor(Math.random() * 100000)}ramakrish122na@ce.com`,
                        status: "active"
                    }
                })
                    .then(function (response) {
                        expect(response.status).to.eq(200)
                    })
                    //Delete
                    .then(function () {
                        cy.request({
                            method: "DELETE",
                            url: `https://gorest.co.in/public/v2/users/${id}`,
                            headers: {
                                Authorization: `Bearer ${tokenV}`
                            }
                        })
                            .then(function (response) {
                                expect(response.status).to.eq(204)
                            })
                    })
            })
    })
})