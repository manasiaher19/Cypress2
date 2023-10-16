///<reference types = "cypress"/>

describe('File Upload', () => {

    it('Test 1', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('FileUpload3.pdf')
        cy.get('#file-submit').click()
        cy.contains('File Uploaded!').should('be.visible')

    })


    it('Test 2', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile('FileUpload3.pdf')
        cy.get('#fileList').should('have.text', 'FileUpload3.pdf')
    })


    it.only('Test 3 upload multiple files', () => {

        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.fixture('FileUpload2.pdf').then(fileContent => {
            cy.get('#filesToUpload').attachFile({
                fileContent,
                fileName: 'FileUpload2.pdf'
            })
        })
        cy.get('#fileList').should('be.visible')

        cy.fixture('FileUpload3.pdf').then((fileContent) => {
            cy.get('#filesToUpload').attachFile({
                fileContent,
                fileName: 'FileUpload3.pdf'
            })
        })
        cy.get('#fileList').should('be.visible')
    })
})


