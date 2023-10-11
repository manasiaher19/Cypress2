///<reference types='cypress'/>
/*1 for the left mouse button
2 for the middle mouse button
3 for the right mouse button*/

describe('verify the ', () => {
    it('verify functionality for double click ', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#double-click').dblclick().should('have.css', 'background-color', 'rgb(147, 203, 90)')

    })

    it('verify functionality for click & hold ', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#click-box').trigger('mousedown', { which: 1 }).should('contain', 'Well done!')
        cy.get('#click-box').trigger('mouseup').should('contain', 'Dont release me!!!')
    })

    it('drag & drop', () => {
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('#droppable').should('have.contain', 'Dropped!')
    })

    it.only('mouse over using real event pluging',()=>{
        //npm install cypress-real-events
        //support-e2e - import "cypress-real-events";

        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('.dropbtn').first().realHover()

    })
})