///<reference types ="cypress"/>

describe('DatePicker', function () {

    let date = new Date() //todays date
    date.setDate(date.getDate() + 90) // date after 90 days (20 jan 2024)
    let dateOfTheDay = date.getDate()
    let month = date.toLocaleDateString('default', { month: "short" })
    let year = date.getFullYear()

    function selectMonthYear(month, year) {
        cy.get('.datepicker-days .datepicker-switch').then((el) => {
            if (el.text().includes(month) && el.text().includes(year)) {
                return false
            }
            else {
                cy.get('.datepicker-days .next').click()
                selectMonthYear(month, year)
            }
        })
    }
    
    it('Verify ----- date is available after 90 days', () => {

        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.glyphicon-calendar').click()
        selectMonthYear(month, year)
        cy.contains('[class="day"]', dateOfTheDay).click()
    });
});

