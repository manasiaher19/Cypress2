//to install xpath ==> npm install cypress-xpath
//paster ==> require('cypress-xpath')  in support e2e.js


///<reference types='cypress'/>

describe('X path ', () => {

    //Gereral xpath
    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_2Brcj4"]').should('have.length', 4)
    })

    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//a[@class="_1_3w1N"]').should('be.visible')
    })

    it('Gereral xpath', function () {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@class="_38VF5e"]').should('have.length', 4)
    })

    it('Gereral xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//[@aria-label="Fashion"]').should('be.visible') //*********
    })

    //----------------------------------------------------------------------------------
    //Selecting element using xpath
    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //Gereral xpath...(for xpath index start from 1)
        cy.xpath('(//div[@class="_2Brcj4"])[3]').should('contain', 'CONSUMER POLICY')
    })

    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //selecting first element using x path....(for xpath index start from 1)
        cy.xpath('(//ul[@class="_3YjYK7"])[1]').should('contain', 'Notification Preferences')
    })

    it('select one element from list using x-path', function () {
        cy.visit('https://www.flipkart.com/')
        //selecting 1st,2nd element using x path....(for xpath index start from 1)
        //cy.xpath('(//ul[@class="_3YjYK7 ecs1XG"]) [1]').should('contain', 'My Profile')
        cy.xpath('(//ul[@class="_3YjYK7 ecs1XG"] ) [2]').should('contain', 'SuperCoin Zone')

    }) //*********

    //---------------------------------------------------------------------------------
    //*[@aria-label="Home & Furniture"]  use star to select attr and value with any tagName   
    //to traverse towards parent el /..

    it('Travers towards parent element', function () {
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//*[@aria-label="Home & Furniture"]/..').should('have.class', '_3sdu8W')
    })

    it('Travers towards parent element', function () {
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        //cy.xpath('//div[@class="_3pKU-e"]/..').should('have.class', '_3YjYK7 ecs1XG')
        cy.xpath('//*[@class="_1XjE3T"]/..').should('have.class', 'YBLJE4')

    })

    it('Travers towards parent element', () => {
        //to traverse towards parent el /..
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//*[@aria-label="Electronics"]/..').should('have.class', '_3sdu8W emupdz')
    })

    //----------------------------------------------------------------------------

    //To traverse towards children use //tagname
    it('traverse towards children el', () => {
        cy.visit('https://www.flipkart.com/')
        //To traverse towards children use //tagname
        //cy.xpath('//*[@aria-label="Home & Furniture"]//div//div').should('have.class', 'YBLJE4')
        //cy.xpath('(//*[@aria-label="Home & Furniture"]//div//div)[1]').should('have.class', 'YBLJE4')
        cy.xpath('//*[@aria-label="Home & Furniture"]//span[@class="_1XjE3T"]').should('have.class', '_1XjE3T')
    })

    it('Traverse towards children element', () => {
        cy.visit('https://www.flipkart.com/')
        //To traverse towards children use =>'//tagname'
        cy.xpath('//*[@aria-label="Two Wheelers"]//div//div').should('have.class', 'YBLJE4')
    })

    it('Traverse towards children element', () => {
        cy.visit('https://www.flipkart.com/')
        //To traverse towards children use =>'//tagname'
        cy.xpath('//*[@aria-label="Mobiles"]//div//div//div').should('have.class', '_3ETuFY')
    })

    //-------------------------------------------------------------------
    //replace()
    it('dynamic Xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@aria-label="$var"]'.replace('$var', 'Appliances'))
    })

    it('dynamic xpath', () => {
        cy.visit('https://www.flipkart.com/')
        cy.xpath('//div[@aria-label="$var"]'.replace('$var', 'Electronics'))
    })

    //-----------------------------------------------------------------------------
    //select element by text()

    it.only('select element by text()', () => {
        cy.visit('https://www.flipkart.com/')
        //select by using text
        //cy.xpath('//*[@class="YBLJE4"]//span[text()=\'Electronics\']').should('have.text', 'Electronics')

        //cy.xpath('//*[@class="YBLJE4"]//span[text()=\'Home & Furniture\']').should('have.text', 'Home & Furniture')

        //cy.xpath('//*[@class="YBLJE4"]//span[text()=\'Mobiles\']').should('have.text', 'Mobiles')
        //// (\'Mobiles\' = Escaplator (singl cotes,double cotes problem))

        //substring by substring
        cy.xpath('//*[contains(text(),\'Deals on Electronics\')]').should('contain', 'Deals on Electronics')
        cy.xpath('//*[contains(text()=\'Best of Electronics\')]')
            .should('contain', 'Best of Electronics')//********* 
    })

})




































// describe('X path ', () => {
//     it('Gereral xpath', () => {
//         cy.visit('https://www.flipkart.com/')
//         cy.xpath('//[@aria-label="Fashion"]').should('be.visible')
//     })
// })

