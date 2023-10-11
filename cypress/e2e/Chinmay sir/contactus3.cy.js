///<reference types ="Cypress"/>

import users from '../../fixtures/multipleUser.json'
describe('verify contactus form', function () {

    let obj = {
        firstname: "Manasi",
        lastname: "Aher",
        email: "manasiaher199@email.com",
        message: "I am learning JS"
    }

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })
        cy.fixture('multipleUser').then(function (users) {
            this.users = users
        })
    })

    // from link 
    it.skip('verify contactus form', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Nikita')
        cy.get('input[name="last_name"]').type('Kale')
        cy.get('input[name="email"]').type('Nikita.kale01@email.com')
        cy.get('textarea[name="message"]').type('Learning Cypress!')
        cy.get('input[value="SUBMIT"').click()
        cy.get('h1').should('have.contain', 'Thank You')

    })

    //object
    it.skip('verify contact us form - object', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(obj.firstname)
        cy.get('input[name="last_name"]').type(obj.lastname)
        cy.get('input[name="email"]').type(obj.email)
        cy.get('textarea[name="message"]').type(obj.message)
        cy.get('input[value="SUBMIT"').click()
        cy.get('h1').should('have.contain', 'Thank You')

    })

    //fixture object

    it.skip('verify contact us form - for testcase fixtures', function () {
        cy.fixture('example').then(function (data) {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstname)
            cy.get('input[name="last_name"]').type(data.lastname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[value="SUBMIT"').click()
            cy.get('h1').should('have.contain', 'Thank You')
        })
    })

    //verify for before
    it.skip('verify contact us form - for before', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(this.data.firstname)
        cy.get('input[name="last_name"]').type(this.data.lastname)
        cy.get('input[name="email"]').type(this.data.email)
        cy.get('textarea[name="message"]').type(this.data.message)
        cy.get('input[value="SUBMIT"').click()
        cy.get('h1').should('have.contain', 'Thank You')

    })

    //multipleUser
    it.only('verify contact us form - multipleUser incorrect way', function () {
        //cy.log(this.users)
        this.users.forEach(function (el) {
            cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(el.firstName)
            cy.get('input[name="last_name"]').type(el.lastName)
            cy.get('input[name="email"]').type(el.email)
            cy.get('textarea[name="message"]').type(el.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')

        })
    })


    // users.forEach(function (el, index) {
    //     it(`running with test data ${index + 1}`, function () {
    //         cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //         cy.get('input[name="first_name"]').type(el.firstName)
    //         cy.get('input[name="last_name"]').type(el.lastName)
    //         cy.get('input[name="email"]').type(el.email)
    //         cy.get('textarea[name="message"]').type(el.message)
    //         cy.get('input[type="submit"]').click()
    //         cy.get('h1').should('have.text', 'Thank You for your Message!')
    //     })
    // })
})