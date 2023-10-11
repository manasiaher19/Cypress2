//children()
//siblings()
//==> .next(),.prev(),.last(),.first(),.eq()
//==>.nextAll(),.prevAll(),.nextUntil(),.prevUntil()

/// <reference types="Cypress"/>

describe('Traversal methods in cypress', function () {
    //.filter()
    it('To get DOM elements that match a specific selector, use the .filter() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text', 'Warning')

        //e.g
        //<li class = "yellow" id = "yello">Banana</li> (class yello = filter)
    })

    //.not()
    it('To remove DOM element(s) from the set of elements, use the .not() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length', 3)
        cy.get('.traversal-button-states').children().not('.disabled').each(function (el) {
            cy.log(el.text())
        })

        //e.g
        // <li class = "fruit">Apple</li>
        // <li  class = "fruit" id = "yello">Banana</li>
        // <li  class = "fruit">Grapes</li>
        // <li  class = "fruit">Papaya</li>
        // <li class = "fruit">Apple</li>
        // <li class = "yellow" id = "yello">Banana</li>
        // <li>Grapes</li>
        // <li>Papaya</li>
        // <li>Grapes</li>
        // <li>Papaya</li>
        // <li>Grapes</li>
        // <li>Papaya</li>   .....(not class yello)
    })

    //.parent()
    it('To get parent DOM element of elements, use the .parent() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.btn-outline-danger').parent().should('have.class', 'traversal-button-states')

        //e.g
        //<ul id ="one">
        //<li class = "fruit">Apple</li>
        //</ul>   ....(<li class> = parent ul)
    })

    //parentsUntil()
    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parentsUntil('.col-sm-12').should('have.length', 2)
    })

    //closest()
    it('To get the closest ancestor DOM element, use the .closest() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').closest('div').should('have.class','thumbnail')
    })

})