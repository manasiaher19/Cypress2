///<reference types = "cypress"/>
import data from '../fileData/file2.json'
describe('readWrite file', () => {

    it('read file from json object', () => {
        cy.visit('https://www.flipkart.com/')
        cy.readFile('cypress/e2e/Ankit sir/fileData/file2.json').then((data) => {
            cy.log(data)

            cy.log(`Thids is from import ${JSON.stringify(data)}`)

            //cy.get('[type="text"]').type(data.Search)  // "Search": "Sarees"
        })
    })



    //read multiple data from file2.json
    it('read file2 from json', () => {
        cy.readFile('cypress/e2e/Ankit sir/fileData/file2.json').then((data) => {
            cy.wrap(data).each((el) => {
                cy.log(el.find)
            })
        })
    })
    //[
    //     {
    //         "Find": "Grocery"
    //     },
    //     {
    //         "Find": "Mobiles"
    //     }




    // //read file flipkart multiple data  (fixture = readData.json)
    it('read file from json', () => {
        cy.visit('https://www.flipkart.com/')
        cy.fixture('readData').then((data) => {
            data.each

            cy.get('.xtXmba').type(data.product1)
            cy.get('').type(data.product2)
        })
    })
    //-----------------------------------------------------------------------------------------

    //write file

    it.only('Write file', () => {
        cy.writeFile('cypress/e2e/Ankit sir/fileData/file2.txt',"")
        let arr = "ajajkbja sbhjsghjas ashajhkjakj sashjshjk \n"
        let arr2 = "bchdbchdcb hsdhudh hdhsjkdyiuwdyi wudywuiyiw"
        cy.writeFile('cypress/e2e/Ankit sir/fileData/file2.txt', arr)
        cy.writeFile('cypress/e2e/Ankit sir/fileData/file2.txt',arr2, { flag: 'a+' })

    })
})