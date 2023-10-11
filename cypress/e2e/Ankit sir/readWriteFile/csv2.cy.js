///<reference types = 'cypress'/>

describe('csv2 Data write', () => {

    it.skip('write csv2', () => {
        //cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart2.csv', "")
        cy.visit('https://www.flipkart.com/search?q=sarees&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('[class="_2B099V"]').each((el) => {
            //el.text()
            let title = el.find('[class="IRpwTa"]').text().replace(',', " ")
            let price = el.find('._30jeq3').text().replace('₹', "")
            cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart2.csv', `${title},${price}\n`, { flag: "a+" })
        })
    })

    it('write csv2', () => {
        cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart2.csv', "")
        cy.visit('https://www.flipkart.com/search?q=sarees&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('[class="_2B099V"]').each((el) => {
            //el.text()
            // let title = el.find('[class="IRpwTa"]').text().replace(',', " ")
            let price = el.find('._30jeq3').text().replace('₹', "")
            if (Number(price) < 500) {
                let title = el.find('[class="IRpwTa"]').text().replace(',', " ")
                cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart2.csv', `${title},${price}\n`, { flag: "a+" })
            }
        })
    })
})