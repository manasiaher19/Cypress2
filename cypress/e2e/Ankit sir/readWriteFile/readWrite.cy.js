///<reference types = "cypress"/>

describe('read write file', () => {

    //Read file

    it.skip('read File', () => {
        cy.visit('https://www.flipkart.com/')
        cy.readFile('cypress/e2e/Ankit sir/fileData/file.json').then((fileData) => {
            cy.get('._3704LK').type(fileData.searchData)
        })
    })

    //Write file

    it.skip('Write file', () => {
        cy.writeFile('cypress/e2e/Ankit sir/fileData/exportedData.txt', "")
        cy.visit('https://www.flipkart.com/')
        cy.get('._3704LK').type('I phone 14')
        cy.get('[action="/search"] ul li').each((el) => {
            cy.writeFile('cypress/e2e/Ankit sir/fileData/exportedData.txt', el.text() + '\n', { flag: 'a+' })
        })
    })
    //Write file 2

    it.only('Write file 2', () => {
        cy.writeFile('cypress/e2e/Ankit sir/fileData/exportedData.txt', "")
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('sarees')
        cy.get('[class="col-12-12 _1MRYA1 _38UFBk"] li').each((el) => {
            cy.writeFile('cypress/e2e/Ankit sir/fileData/exportedData.txt', el.text() + '\n', { flag: 'a+' })
        })
    })

    //Parsespecial character

    it('Parsespecial character sequence', () => {
        cy.writeFile('cypress/e2e/Ankit sir/fileData/exportedData.txt', "")
        cy.visit('https://www.flipkart.com/')
        cy.get('[type="text"]').type('{I phone 14}', { parseSpecialCharSequences: false })
    })






})

