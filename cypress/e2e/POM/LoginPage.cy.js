import { homepage } from "../../support/POM/LoginPage"
describe('Validate the login page', () => {
    let home = new homepage()
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('validate login functionality with valid credentials', () => {
        // cy.get('#user-name').type('standard_user')
        // cy.get('#password').type('secret_sauce')
        // cy.get('#login-button').click()

        home.login('Admin', 'admin123')
        home.AfterValidation()
    })

    it('validate login functionality with invalid credentials', () => {
        home.login('Admin1', 'admin1234')
        cy.get('.oxd-alert-content-text').should('be.visible')
    })

    it('verify the forgot password functionality', () => {

        home.Forgotpassword()
    })

    it('verify the Social media icon on homepage', () => {

        home.SocialMediaIcon()
    })

    it.only('verify Main logo on homepage', () => {

        home.MainLogo()
    })


})