/// <reference types = "Cypress"/>

describe('traversal method incypress', function () {
    it('To get children of DOM elements, use the .children() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-job-list').children().should('have.length', 2)
        cy.get('.traversal-job-list').children().each(function (el) {
            cy.log(el.text())
        })
    })
    //sibling = .next()
    it('To get the next sibling DOM element within elements, use the .next() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#coffee').next().should('have.text', 'Tea')
    })
    //.prev()
    it('To get the prev sibling DOM element within elements, use the .prev() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#milk').prev().should('have.text', 'Tea')

    })
    //.first()
    it('To get the first DOM element within elements, use the .first() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.text', 'Coffee')
    })
    //.last()
    it('To get the last DOM element within elements, use the .last() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-food-list').children().last().should('have.text', 'Lentils')
    })
    //.eq()
    it('To get a DOM element at a specific index, use the .eq() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(1).should('have.text', 'Tea')
    })

    //sibling
    it('To get all sibling DOM elements of elements, use the .siblings() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.disabled').siblings().should('have.length', 3)
        cy.get('.disabled').siblings().each(function (el) {
            cy.log(el.text())
        })
    })

    //nextAll
    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextAll().should('have.length', 10)
        cy.get('#veggie').nextAll().should('have.length', 4)
        cy.get('#types-of-jobs').nextAll().should('have.length', 1)
        cy.get('#types-of-jobs').nextAll().each(function (el) {
            cy.log(el.text())
        })
    })
    //prevAll
    it.only('To get all of the prev sibling DOM elements within elements, use the .prevAll() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length', 6)
        cy.get('#veggie').prevAll().each(function (el) {
            cy.log(el.text())
        })

        //find Cherries only
        cy.get('#veggie').prevAll().each(function (el) {
            if (el.text() == 'Cherries') {
                cy.log(el.text())
            }
        })

        //check whether Banana is present or not
        let eleFound = false //flag
        cy.get('#veggie').prevAll().each(function (el) {
            if (el.text() === 'Banana') {
                eleFound = true
            }
        }).then(function () {
            expect(eleFound).to.eql(true)
        })

        //find the text of element which having class list-header
          cy.get('#veggie').prevAll().each((el)=>{
            if(el.hasClass('list-header')){
                cy.log(el.text())
            }
          })


    })



    //nextUntil()
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length', 5)
        cy.get('#veggie').nextUntil('.traversal-job-list').should('have.length', 4)

    })

    //prevUntil()
    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.', function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        //cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
        cy.get('.traversal-job-list').prevUntil('#veggie').should('have.length', 4) //*******
        cy.get('.traversal-job-list').prevUntil('#veggie').each(function (el) {
            cy.log(el.text())
        })


        cy.get('.traversal-food-list').prevUntil('.traversal-drinks-list').should('have.length', 5)
        cy.get('.traversal-food-list').prevUntil('.traversal-drinks-list').each(function (el) {
            cy.log(el.text())
        })//******** */
    })

})