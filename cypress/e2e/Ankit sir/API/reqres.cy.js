//API

///<reference types = "cypress"/>

describe('Reqres API', () => {
    let userData;

    //GET
    it('Get single user api', () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users/2"
        }).then((res) => {
            //cy.log(res)
            //cy.log(JSON.stringify(res)) //convert JSON into String
            //cy.log(typeof JSON.stringify(res))  //String

            expect(res.status).to.eql(200)
            //cy.log(res.body.data)
            userData = res.body.data
        })
    })

    it('Get list of users', () => {

        cy.request({
            method: "GET",
            url: "https://reqres.in/api/users?page=2"
        }).then((res) => {
            //cy.log(JSON.stringify(res))

            expect(res.status).to.eql(200)
            userData = res.body.data
        })
    })

    it('Get details of user', () => {

        cy.request({
            method: "GET",
            url: `https://reqres.in/api/users/${userData[3].id}`
        }).then((res) => {
            //cy.log(res)
            expect(res.status).to.eql(200)
            cy.log(JSON.stringify(res))

        })
    })

    //POST

    it('create user ', () => {

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/users",
            body: {
                "name": "rahul",
                "job": "leader"
            }
        }).then((res) => {
            //cy.log(res)
            expect(res.statusText).to.eql("Created")
            //expect(res.body.id).to.eql("655")
            expect(res.body.job).to.eql("leader")
        })
    })

    //PUT

    it('Update user', () => {
        cy.request({
            method: "PUT",
            url: "https://reqres.in/api/users/2",
            body: {
                "name": "manasi",
                "job": "tester",
                "id": 20
            }
        }).then((res) => {
            //cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.body.name).to.eql("manasi")
            expect(res.body.id).to.eql(20)

        })
    })

    //DELETE

    it.only('Delete user',()=>{

        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2"
        }).then((res)=>{
            //cy.log(res)
            expect(res.status).to.eql(204)
            expect(res.statusText).to.eql("No Content")
        })
    })
})

