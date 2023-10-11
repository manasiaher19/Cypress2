///<reference types="cypress"/>


describe('CSV Data write', () => {

    it.skip('write csv', () => {
        let str1 = "Header1,"
        let str2 = "Header2"
        cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/testData.csv', str1 + str2)
    })

    it.skip('Export data in csv format', () => {
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('[class="_3pLy-c row"]').each((el) => {
            let price = el.find('[class="_30jeq3 _1_WHN1"]').text().replace(',', "").replace('₹', "")
            let title = el.find('._4rR01T').text().replace(',', "")
            cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart.csv', `${title},${price}\n`, { flag: "a+" })

        })
    })

    //find price > 70000

    it('Export data in csv format', () => {
        cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart.csv',"")
        //let count=0
        cy.visit('https://www.flipkart.com/search?q=i%20phone&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off')
        cy.get('[class="_3pLy-c row"]').each((el) => {
            let price = el.find('[class="_30jeq3 _1_WHN1"]').text().replace(',', "").replace('₹', "")
            if (Number(price) > 70000) {
                let title = el.find('._4rR01T').text().replace(',', "")
                cy.writeFile('cypress/e2e/Ankit sir/readWriteFile/flipkart.csv', `${title},${price}\n`, { flag: "a+" })
            }
        })
    })
})