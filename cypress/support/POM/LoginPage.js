export class homepage {
    elements = {

        UsernameField: '[name="username"]',
        PassField: '[type="password"]',
        LognField: '[type="submit"]',
        cartIcon: '[class="oxd-brand-banner"]',
        Forgotpass: '.orangehrm-login-forgot-header',
        SocialMediaIcon: '[class="orangehrm-login-footer-sm"]',
        MainLogo: '[alt="company-branding"]'

    }

    login(Username, Password) {
        cy.get(this.elements.UsernameField).type(Username)
        cy.get(this.elements.PassField).type(Password)
        cy.get(this.elements.LognField).click()
    }

    AfterValidation() {
        cy.get(this.elements.cartIcon).should('be.visible')
    }

    Forgotpassword() {
        cy.get(this.elements.Forgotpass).click()
        cy.url().should('have.contain', 'requestPasswordResetCode')
        cy.get('.orangehrm-forgot-password-button--reset').should('have.contain', ' Reset Password ')
    }

    SocialMediaIcon() {
        cy.get(this.elements.SocialMediaIcon).children().should('have.length', 4)
    }

    MainLogo() {
        cy.get(this.elements.MainLogo).should('be.visible')
    }

}