import { Dashboard } from "../../support/POM/Dashbord"
import { homepage } from "../../support/POM/LoginPage"

describe('verify the dashbord page', () => {
    let dashboard = new Dashboard()
    let login = new homepage()

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.login('Admin', 'admin123')
        cy.url().should('have.contain', 'dashboard')
    })

    it('verify Mainmenu for dashboard', () => {

        dashboard.VerifyMainmenu()
    })

    it('verify the Quick lunchTab', () => {

        dashboard.QuickLunchTab()
    })

    it.only('verify the dashbord logo', () => {
        
        dashboard.VerifyDashbordLogo()
    })

})