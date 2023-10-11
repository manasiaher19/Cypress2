///<reference types ="Cypress"/>

describe('Verify contactUs form', () => {

    let testData = {
        firstName: 'dummyUser',
        lastName: 'dummyLastname',
        email: 'dummyUser@email.com',
        mobile: "8975345627",
        website: "www.dummy.com",
        companyName: 'dummyCompany',
        message: 'for test purpose'
    }
    //testData obj 
    it.only('verify contactUs form with valide details', () => {
        cy.visit('https://mediaproper.com/contact-us/')
        cy.get('input_1_1').type(testData.firstName)
        cy.get('input_1_2').type(testData.lastName)
        cy.get('input_1_3').type(testData.email)
        cy.get('input_1_4').type(testData.mobile)
        cy.get('input_1_5').type(testData.website)
        cy.get('input_1_6').type(testData.companyName)
        cy.get('input_1_7').type(testData.message)
        cy.get('submit_button_1').click()
        cy.get('h1').should('be.visible')

        //assertion==> validation 
        //implicit assertion ==> should()
        //explicit assertion ==> expect()
    })

    //fixture file = testData
    it('Reading data from fixtures for single it block', () => {
        cy.visit('https://mediaproper.com/contact-us/')
        cy.fixture('testData').then((data) => {
            cy.get('input_1_1').type(data.firstName)
            cy.get('input_1_2').type(data.lastName)
            cy.get('input_1_3').type(data.email)
            cy.get('input_1_4').type(data.mobile)
            cy.get('input_1_5').type(data.website)
            cy.get('input_1_6').type(data.companyName)
            cy.get('input_1_7').type(data.message)
            cy.get('submit_button_1').click()
            cy.get('h1').should('be.visible')
        })
        // cy.get('submit_button_1').click()
        // cy.get('h1').should('be.visible')
    })

    //customCommand + fixture file(testData)
    it('custom command + fixture', () => {
        cy.visit('https://mediaproper.com/contact-us/')
        cy.fixture('testData').then((data) => {
            cy.contactUsFillData(data.firstName, data.lastName, data.email, data.mobile, data.website, data.companyName, data.message)
            cy.get('submit_button_1').click()
            cy.get('h1').should('be.visible')
        })
        // cy.get('submit_button_1').click()
        // cy.get('h1').should('be.visible')
    })

    //customCpmmand + fixture file(arrObject)
    it('customcommand +fixtures from array of object', () => {
        cy.fixture('arrObj').then((data) => {
            data.forEach((el) => {
                cy.visit('https://mediaproper.com/contact-us/')
                cy.contactUsFillData(el.firstName, el.lastName, el.email, el.mobile, el.website, el.companyName, el.message)
                cy.get('submit_button_1').click()
                cy.get('h1').should('be.visible')
            })
        })
    })
})