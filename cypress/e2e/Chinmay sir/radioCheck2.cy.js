/// <reference types = "Cypress"/>

describe('verify the functionality of radioButton,checkBox,select Drop down', function () {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    })


    it('verify functionality for radioButton', function () {
        //basic assertion for check Nd not check buttons
        cy.get('input[value="blue"]').click().should('be.checked')
        cy.get('input[value="orange"]').check().should('be.checked')
        cy.get('input[value="purple"]').should('not.be.checked')


        //loop
        cy.get('#radio-buttons').children().filter('input').should('have.length', 5).each((el) => {
            cy.wrap(el).click().should('be.checked')
        })

        // cy.get('#radio-buttons').children().filter('input').should('have.length',5).each((el)=>{
        //     cy.wrap(el).should('not.be.checked')
        // })  ********** can we use also for not check
    })


    it('verify functionality for checkBox', function () {
        // //with click
        // cy.get('input[value = "option-3"]').should('be.checked')
        // cy.get('input[value = "option-3"]').click().should('not.be.checked')

        // cy.get('input[value = "option-1"]').click().should('be.checked')
        // cy.get('input[value = "option-1"]').click().should('not.be.checked')

        // cy.get('input[value = "option-2"]').click().should('be.checked')
        // cy.get('input[value = "option-2"]').click().should('not.be.checked')

        //with check & uncheck method
        cy.get('input[value = "option-3"]').should('be.checked')
        cy.get('input[value="option-3"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')


        cy.get('input[value="option-1"]').check().should('be.checked')
        cy.get('input[value="option-3"]').uncheck().should('not.be.checked')


        //--------------------------------------------------------------------------

        //all buttons check

        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
            .should('to.be.checked')


        //-----------------------------------------------------

        //loop

        cy.get('input[type="checkbox"]').each(function (el) {
            cy.wrap(el).check().should('be.checked')
            cy.wrap(el).uncheck().should('not.be.checked')
        })

    })

    //---------------------------------------------------------------------------
    // selected , enabled , disabled , visible , exist

    it('verify selected , enabled , disabled , visible , exist', function () {
        cy.get('input[value="cabbage"]').should('be.disabled')
        cy.get('input[value="lettuce"]').should('be.enabled')
        cy.get('input[value="pumpkin"]').should('to.be.checked')
        cy.get('#fruit-selects').should('exist')
    })

    //----------------------------------------------------------------------------
    //Drop down

    it('verigy drop down', function () {

        // cy.get('#dropdowm-menu-1').select('python')
        // cy.get('#dropdowm-menu-2').select('testng')
        // cy.get('#dropdowm-menu-3').select('css')

        let arr = ['python', 'testng', 'css']
        cy.get('.section-title').first().children().each(function (el, index) {
            cy.wrap(el).select(arr[index]).should('have.value', arr[index])

        })
    })

    //verify the select drop down in cypress
    it.only('verify the select drop down in cypress', function () {
        cy.url().should('contain', 'Dropdown-Checkboxes-RadioButton')
    })


})