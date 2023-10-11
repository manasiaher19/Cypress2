///<reference types ="Cypress"/>

describe('traversal method in cypress', () => {
    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })
    //prevUntil
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', () => {
        cy.get('#fruits').prevUntil('#coffee').should('have.length', 0)
        cy.get('#types-of-jobs').prevUntil('#veggie').should('have.length', 0)

    })
    //nextUntil()
    it('To get all next sibling DOM elements within elements until other element, use the .nextUntil() command.', () => {
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
        cy.get('#fruits').nextUntil('#veggie').each(function (el) {
            cy.log(el.text())
        })
    })

    //filter()
    it('filter()', function () {
        cy.get('.traversal-button-states').children().filter('.disabled')
            .should('have.text', 'Warning')
    })

    //find()
    it('find()', function () {
        cy.get('.traversal-pagination').find('li').find('a')

        //find & filter
        cy.get('.traversal-pagination').find('li').find('a').filter('a[aria-label="Next"]')
            .then((el) => {
                cy.log(el)
            })

    })
    //not()
    it('not()', function () {
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
    })

    //parent()
    it('parent()', function () {
        cy.get('#fruits').parent().should('have.class', 'traversal-food-list')
        cy.get('.disabled').parent().should('have.class', 'traversal-button-states')
    })

    //parents()
    it('parents()', function () {
        cy.get('#fruits').parents().should('have.length',6)
        cy.get('#veggie').parents().should('have.length',6)

    })

    //parentUntil()
    it.only('parentsUntile()', function () {
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length',2)
        //cy.get('#veggie').parents().should('have.length',6)

    })

    //closest()
    it('closest()', function () {
        cy.get('.btn-outline-danger').closest('div').should('have.class', 'traversal-button-states')
        cy.get('.traversal-pagination').closest('div').should('have.class', 'thumbnail')
    })


})