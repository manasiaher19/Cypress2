export class Homepage {

    elements = {
        UserNameField: '#user-name',
        PassField: '#password',
        LoginField: '#login-button',
        Product: '.product_label',
        InvalidPass: 'h3',
        ProductList: '[class="inventory_list"]',
        SocialIcons: '[class="social"]',
        MainLogo: '[class="app_logo"]',
        AddToCardIcon: '[data-icon="shopping-cart"]'
    }

    login(username, password) {
        cy.get(this.elements.UserNameField).type(username)
        cy.get(this.elements.PassField).type(password)
        cy.get(this.elements.LoginField).click()
    }

    AfterVerification() {
        cy.get(this.elements.Product).should('be.visible')
    }

    Invalidpass() {

        cy.get(this.elements.InvalidPass).should('have.text', 'Epic sadface:Username and password do not match any user in this service')
    }

    Productslist() {
        cy.get(this.elements.ProductList).children().should('have.length', 6)
    }

    SocialMediaIcons() {
        cy.get(this.elements.SocialIcons).children().should('have.length', 3)
    }

    VerifyMainLogo() {
        cy.get(this.elements.MainLogo).should('be.visible')
    }

    AddToCardIcon() {
        cy.get(this.elements.AddToCardIcon).click()
        cy.get('[class="subheader"]').should('be.visible')
    }
}