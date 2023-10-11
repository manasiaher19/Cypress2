///<reference types = "cypress"/>

//JSON.stringify()==> Convert Json into string
//JSON.parse()=>convert JSON string into JSON

describe('Verify Gorest site', () => {
    let Token = "38e7138ffd1a0515f357414c9c8c9c3c7191d18c8c47e52ce1892da0c11e1a67"
    let id = ""

    //POST
    it('create User (POST)', () => {

        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            },
            body: {
                "name": "Tenali Ramakrishna",
                "gender": "male",
                "email": `test${Math.ceil(Math.random() * 1000)}@15ce.com`,
                "status": "active"
            }//`test${Math.ceil(Math.random()*1000)} == for unique email id
        }).then((res) => {
            //cy.log(JSON.stringify(res))
            // cy.log(res.body.id)  //5228493
            Id = res.body.id
            expect(res.body.status).to.eql("active")
            expect(res.status).to.eql(201)
        })
    })

    //GET
    it('to retrive user', () => {

        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            cy.log(res.status)
        })
    })

    //PUT
    it('Update user', () => {

        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/628144",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            },
            body: {
                "name": "Allasani Peddana",
                "email": "allasani.peddana@15ce.com",
                "status": "active"
            }
        }).then((res) => {
            //cy.log(JSON.stringify(res))
            cy.log(res.status)
            cy.log(res.body.name)

        })
    })

    //DELETE
    it.only('Delete user', () => {

        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/"+id,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + Token
            }
        }).then((res) => {
            cy.log(res)
        })
    })

    
})