///<reference types ="Cypress"/>

describe('API testing', function () {

    it('GET API to get users pagewise', function () {
        //cy.request({object,method}) => to hit api

        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "GET"
        })
            .then(function (response) {
                //cy.log(response)
                expect(response.status).to.eql(200)
            })

    })

    it('POST API to create user', function () {
        //cy.request({object,method,body})
        cy.request({
            url: "https://reqres.in/api/users",
            method: "POST",
            body: {
                "name": "morpheus",
                "job": "leader"
            }
        })
            .then(function (response) {
                expect(response.status).to.eql(201)
            })
    })

    it('PUT API to update user', function () {
        //cy.request({object,method,body})
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "PUT",
            body: {
                "name": "manasi",
                "job": "tester"
            }
        })
            .then(function (response) {
                expect(response.status).to.eql(200)
            })
    })

    it('DELETE API to delete user', function () {
        //cy.request({object,method,body})
        cy.request({
            url: "https://reqres.in/api/users/2",
            method: "DELETE",
        })
            .then(function (response) {
                expect(response.status).to.eql(204)
            })
    })

})