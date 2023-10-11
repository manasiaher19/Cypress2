export class Dashboard {

    elements = {
        Mainmenu: 'ul[class="oxd-main-menu"]',
        QuickLunchTab: '.orangehrm-quick-launch',
        DashboardLogo: '[alt="client brand banner"]'

    }

    VerifyMainmenu() {
        cy.get(this.elements.Mainmenu).children().should('have.length', 12)
    }

    QuickLunchTab() {
        cy.get(this.elements.QuickLunchTab).children().should('have.length', 6)
    }

    VerifyDashbordLogo(){
        cy.get(this.elements.DashboardLogo).should('be.visible')
    }
}