/// <reference types= "cypress" />

describe('File Upload', () =>{

    it('Png file updoad',()=>{
        cy.visit('https://www.csm-testcenter.org/test?do=show&subdo=common&test=file_upload')
        cy.get(':nth-child(4) > form > table > tbody > :nth-child(1) > [align="left"] > input').attachFile('download.png')
        cy.get(':nth-child(4) > form > table > tbody > :nth-child(2) > [align="left"] > #button').click()

        cy.get('#content #item h1').invoke('text','Information about the uploaded data').should('be.visible')
    })
})