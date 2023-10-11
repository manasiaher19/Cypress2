import { Homepage } from "../../../support/POM/Swaglabs/Loginpage2";

describe('Verify Swag Labs login page', () => {
    let home = new Homepage()

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    })
    it('verify login functionality with valid credentials', () => {

        home.login('standard_user', 'secret_sauce')
        home.AfterVerification()
    })

    it('verify login functionality with Invalid password', () => {
        home.login('standard_user', 'secret123')
        home.Invalidpass()
    })

    it('Verify product list', () => {
        home.login('standard_user', 'secret_sauce')
        home.Productslist()
    })

    it('Verify social media icons', () => {
        home.login('standard_user', 'secret_sauce')
        home.SocialMediaIcons()
    })

    it('Verify Main Logo', () => {
        home.login('standard_user', 'secret_sauce')
        home.VerifyMainLogo()
    })

    it.only('Verify Add to Card Icon', () => {
        home.login('standard_user', 'secret_sauce')
        home.AddToCardIcon()
    })

})