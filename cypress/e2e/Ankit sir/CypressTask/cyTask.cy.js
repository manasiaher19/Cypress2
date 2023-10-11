///<reference types = 'cypress'/>

describe('Create task', () => {

    it('create task to log on console', () => {
        cy.task('log', 'My message is*************')
    })

    it('create task to add two numbers', () => {

        cy.task('add', { a: 2, b: 3 }).then((result) => {
            console.log(result)
        })

    })

    it('create task to substract two numbers', () => {

        cy.task('subs', { a: 10, b: 5 }).then((res) => {
            console.clear()
            console.log(res)
        })

    })

    it.only('create task to multiplication of  two numbers', () => {

        cy.task('Multiply', { a: 10, b: 10 }).then((ans) => {
            console.log(ans)
        })
    })
})