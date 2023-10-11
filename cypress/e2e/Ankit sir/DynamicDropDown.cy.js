//Interview ask que
//each() => when you want to find multiple elements use each
///<reference types = "cypress"/>

describe('Dynamic Dropdown(Interview ask quesion)', () => {

    beforeEach(() => {
        cy.visit('https://www.flipkart.com/')
    })
    it('Dynamic Dropdown', () => {
        //cy.visit('https://www.flipkart.com/'),
        cy.get('[type="text"]').type('i phone')
        cy.get('._17d0yO').each((el) => {
            //cy.log(el.text())
            if (el.text().includes(' 11 64bg')) {
                cy.wrap().click()
                return false
            }

        })
    })

    it('Dynamic Dropdown2', () => {
        //cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('mobile')
        cy.get('[class="lrtEPN _17d0yO"]').each((el) => {
            //cy.log(el.text())
            if (el.text().includes('mobile  camera lens')) {
                cy.wrap().click()
                return false
            }
        })
    })

    it('Dynamic Dropdown 3', () => {
        cy.get('[type="text"]').type('washing machine')
        cy.get('[class="lrtEPN _17d0yO"]').each((el) => {
            if (el.text().includes('washing machine cover')) {
                cy.wrap().click()
                return false
            }
        })
    })

    it('Dynamic Dropdown 4', () => {
        cy.get('[type="text"]').type('Electronics')
        cy.get('[class="lrtEPN _17d0yO"]').each((el) => {
            if (el.text().includes('electronics items')) {
                cy.log(el.text())
                return false
            }
        })

        it.only('Dynamic dropdown 5', () => {
            cy.get('._2cAig-').type('Best of Electronics')
            cy.get('._3LU4EM').each((el) => {
                if (el.text().includes('Top Mirrorless Cameras')) {
                    cy.wrap().click()
                    return false
                }
            })
        })

    })

})