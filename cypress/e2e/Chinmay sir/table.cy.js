///<reference types ="Cypress"/>

// describe('verify table in cypress', function () {



//     it('verify sum of value for table first', function () {
//         let sum = 0
//         cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t01').find('tbody').children().each(function (row, index) {
//             if (index != 0) {
//                 //cy.log(row.text())   // childrens & text
//                 //row.children().last().text()
//                 sum = sum + Number(row.children().last().text())
//             }
//         }).then(function () {
//             expect(sum).to.eql(159)
//         })
//     })

//     it.only('verify sum of value for table two', function () {
//         let sum = 0
//         cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
//         cy.get('#t02').find('tbody').children().each(function (row, index) {

//             if (index != 0) {
//                 //  cy.log(row.text())
//                 //row.children().last().text()
//                 sum = sum + Number(row.children().last().text())
//             }
//         }).then(function(){
//             expect(sum).to.eql(163)
//         })

//     })
// })

//--------------------------------------------------------------------------------------
//to avoid repetation of code = using function

describe('verify table in cypress', function () {

    function validateTableSum(id, expectedValue) {
        let sum = 0
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get(`#t0${id}`).find('tbody').children().each(function (row, index) {
            if (index != 0) {
                //cy.log(row.text())   // childrens & text
                //row.children().last().text()
                sum = sum + Number(row.children().last().text())
            }
        }).then(function () {
            expect(sum).to.eql(expectedValue)
        })

    }



    it('verify sum of value for table first', function () {
        let sum = 0
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t01').find('tbody').children().each(function (row, index) {
            if (index != 0) {
                //cy.log(row.text())   // childrens & text
                //row.children().last().text()
                sum = sum + Number(row.children().last().text())
            }
        }).then(function () {
            expect(sum).to.eql(159)
        })
    })

    it('verify sum of value for table two', function () {
        let sum = 0
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('#t02').find('tbody').children().each(function (row, index) {

            if (index != 0) {
                //  cy.log(row.text())
                //row.children().last().text()
                sum = sum + Number(row.children().last().text())
            }
        }).then(function () {
            expect(sum).to.eql(163)
        })

    })

    it.only('verify sum of value for both tables', function () {
        validateTableSum(1, 159)
        validateTableSum(2, 163)
        // validateTableSum(3, 163)

    })
})