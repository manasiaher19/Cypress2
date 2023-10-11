///<reference types ="cypress"/>

import Users from '../../fixtures/multipleUser2.json';
describe('Verify contact us form (with fixture)', () => {

    let txtData = {

        firstName: 'Manali',
        lastName: 'Mule',
        email: 'mm12@email.com',
        comments: 'For test perpose!'
    }

    beforeEach(function () {
        cy.fixture('multipleUser2').then(function (Users) {
            this.Users = Users
        })
    })

    //obj = txtData
    it('verify contact us form with Valid details', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(txtData.firstName)
        cy.get('[name="last_name"]').type(txtData.lastName)
        cy.get('[name="email"]').type(txtData.email)
        cy.get('[name="message"]').type(txtData.comments)
        cy.get('[value="SUBMIT"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })


    //fixture file= txtData.json
    it('Reading data from fixture for single it block', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.fixture('txtData').then((data) => {
            cy.get('[name="first_name"]').type(data.firstName)
            cy.get('[name="last_name"]').type(data.lastName)
            cy.get('[name="email"]').type(data.email)
            cy.get('[name="message"]').type(data.comments)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })



    //fixture file = multipleUser2.json (fixture in before each block)
    it('read data for multiple users from fixture file', () => {
        Users.forEach((el) => {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.comments)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        });
    })


    //******reading multiple user index wise *******//
    Users.forEach((el, index) => {
        it(`running with test data ${index + 1}`, () => {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.firstName)
            cy.get('[name="last_name"]').type(el.lastName)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.comments)
            cy.get('[value="SUBMIT"]').click()
            cy.get('h1').should('have.text', 'Thank You for your Message!')
        })
    })

    //------------------------------------------------------------------------------------
    //without before each block ==>
    it.only('read data for multiple users from fixture file', () => {
        cy.fixture('multipleUser2').then((user) => {
            user.forEach((el) => {
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(el.firstName)
                cy.get('[name="last_name"]').type(el.lastName)
                cy.get('[name="email"]').type(el.email)
                cy.get('[name="message"]').type(el.comments)
                cy.get('[value="SUBMIT"]').click()
                cy.get('h1').should('have.text', 'Thank You for your Message!')
            })
        })
    })
    //----------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------


    //custom command(cc2.cy.js) + feature file
    it('custom command + feature file', () => {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.fixture('txtData').then((data) => {
            cy.contactUsFillData('rashi', 'kardk', 'rk08@email.com', 'for testing!')
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
        })
    })


    //customCpmmand(cc2.cy.js) + fixture file(multipleUser2.json)
    it('custom command + multiple user', () => {
        Users.forEach((el) => {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.contactUsFillData(el.firstName, el.lastName, el.email, el.comments)
            cy.get('[type="submit"]').click()
            cy.get('h1').should('be.visible')
        })
    })

})

