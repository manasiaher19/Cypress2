/// <reference types="Cypress" />

describe('verfify the API', function () {

    //GET
    it('verify the GET request', function () {
        // //option 1
        // cy.request('GET', 'https://reqres.in/api/users?page=2')
        //     .then(function (response) {
        //         //cy.log('response')
        //         expect(response.status).to.eql(200)
        //         expect(response.body.page).to.eql(2)
        //         expect(response.body.per_page).to.eql(6)
        //         expect(response.body.per_page).to.eql(response.body.data.length)
        //     })


        // //option 2
        // cy.request({
        //     url: 'https://reqres.in/api/users?page=2',
        //     method: 'GET'
        // })
        //     .then(function (response) {
        //         //cy.log('response')
        //         expect(response.status).to.eql(200)
        //         expect(response.body.page).to.eql(2)
        //         expect(response.body.per_page).to.eql(6)
        //         expect(response.body.per_page).to.eql(response.body.data.length)

        //         expect(response.body.data[0]).to.have.property("id", 7)
        //         response.body.data.forEach(function(el){
        //             expect(el).to.have.property('email')
        //             expect(el).to.have.property('first_name')
        //             expect(el).to.have.property('last_name')
        //             expect(el).to.have.property('avatar')
        //         })

        //     })


        //option 3
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'GET',
            qs: { page: 2 }
        })
            .then(function (response) {
                //cy.log('response')
                expect(response.status).to.eql(200)
                expect(response.body.page).to.eql(2)
                expect(response.body.per_page).to.eql(6)
                expect(response.body.per_page).to.eql(response.body.data.length)

                expect(response.body.data[0]).to.have.property("id", 7)
                response.body.data.forEach(function (el) {
                    expect(el).to.have.property('email')
                    expect(el).to.have.property('first_name')
                    expect(el).to.have.property('last_name')
                    expect(el).to.have.property('avatar')
                })

            })
    })

    //---------------------------------------------------------------------

    //POST

    it('verify the POST request', function () {
        //     //option 1
        //     cy.request({
        //         url: 'https://reqres.in/api/users',
        //         method: 'POST',
        //         body: {
        //             "name": "Manasi",
        //             "job": "Tester"
        //         }
        //     })
        //         .then(function (response) {
        //             cy.log('response')
        //             expect(response.status).to.eq(201)

        //             // {
        //             //     "name": "Manasi",
        //             //     "job": "Tester",
        //             //     "id": "689",
        //             //     "createdAt": "2023-06-22T07:29:48.207Z"
        //             // }

        //             expect(response.body).to.have.keys(['name', 'job', 'id', 'createdAt'])
        //         })
        // })


        //option 2

        let payload = {
            "name": "Manasi",
            "job": "Tester",
            "id": "689"
        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: payload
        })
            .then(function (response) {
                cy.log('response')
                expect(response.status).to.eq(201)

                // {
                //     "name": "Manasi",
                //     "job": "Tester",
                //     "id": "689",
                //     "createdAt": "2023-06-22T07:29:48.207Z"
                // }

                expect(response.body).to.have.keys(['name', 'job', 'id', 'createdAt'])
                expect(response.body.name).to.have.eql(payload.name)
                expect(response.body.job).to.have.eql(payload.job)
                expect(response.body.id).to.have.eql(payload.id)
            })
    })

    //-------------------------------------------------------------------------------

    //Update

    it('verify the update request', function () {

        let payload = {
            "name": "Manish",
            "job": "Leader"
        }
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PUT',
            body: payload
        })
            .then(function (response) {
                cy.log('response')
                expect(response.status).to.eql(200)
                // {
                //     "name": "Manish",
                //     "job": "Leader",
                //     "updatedAt": "2023-06-22T07:56:08.457Z"
                // }
                expect(response.body).to.have.keys(['name', 'job', 'updatedAt'])
                expect(response.body.name).to.have.eql(payload.name)
                expect(response.body.job).to.have.eql(payload.job)

                //expect(response.body.updatedAt).to.have.eql(payload.updatedAt)
                //Output => assersion error

                expect(response.body).to.have.property('job', payload.job)
                //expect(response.body).to.have.property('updatedAt', payload.updatedAt)
                //Output => assersion error

                expect(response.duration).to.be.lessThan(573) //******************************** */

            })

    })
    //=================================================================================

    //Update with Patch

    it.only('verify update request(Patch)', function () {

        let payload = {
            "name": "Nikhil",
            // "job": "Leader"
        }

        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'PATCH',
            body: payload
        })
            .then(function(response){
                cy.log('response')
                expect(response.status).to.eql(200)
                expect(response.body.name).to.have.eql(payload.name)
                expect(response.body.job).to.have.eql(payload.job) 
                //Output => expected undefined to deeply equal undefined

            })
    })

    //------------------------------------------------------------------------------------------

    //Delete

    it('verify delete request', function () {
        cy.request({
            url: 'https://reqres.in/api/users/2',
            method: 'DELETE'
        })
            .then(function (response) {
                expect(response.status).to.eql(204)
            })
    })

})