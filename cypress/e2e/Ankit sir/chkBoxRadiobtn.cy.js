///<reference types = 'cypress'/>

describe('verify functionality for checkBox & radioButton', () => {

    it('verify for checkBox', () => {

        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="option-1"]').check().should('be.checked')
        cy.get('[value="option-1"]').click().should('not.be.checked')

        cy.get('[value="option-2"]').check().should('be.checked')
        // cy.get('[value="option-2"]').click().should('not.be.checked')
        cy.get('[value="option-2"]').uncheck().should('not.be.checked')


        cy.get('[value="option-3"]').uncheck().should('not.be.checked')
        //cy.get('[value="option-3"]').click().should('not.be.checked')


        //loop
        cy.get('[type="checkbox"]').each((chk) => {
            cy.wrap(chk).check().should('be.checked')
            cy.wrap(chk).uncheck().should('not.be.checked')
        })

    })

    it('check functionality for radioButton', () => {
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="green"]').check().should('be.checked')
        //cy.get('[value="green"]').uncheck().should('not.be.checked') --- error
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('input[value="yellow"]').click().should('be.checked')

    })

    it.only('check functionality for flipkart chekBox', () => {
        cy.visit('https://www.flipkart.com/search?q=i+phone&as=on&as-show=on&otracker=AS_Query_HistoryAutoSuggest_6_0_na_na_na&otracker1=AS_Query_HistoryAutoSuggest_6_0_na_na_na&as-pos=6&as-type=HISTORY&suggestionId=i+phone&requestId=46314a42-9a2b-45a3-b9a5-7939a182a73f')
        cy.get('[class="_24_Dny"]').check().should('be.checked')

    })
})