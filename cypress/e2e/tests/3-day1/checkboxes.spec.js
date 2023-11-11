/// <reference types= "cypress" />

describe('Checkboxes testing', () => {

    it('Checkbox testing',()=>{

        cy.visit('https://faculty.washington.edu/chudler/java/boxes.html')

        // cy.viewport('samsung-s10')

        cy.get('[type="checkbox"]').eq(0).should('not.be.checked')

        cy.wait(1000)

        cy.get('[type="checkbox"]').eq(1).click().should('be.checked')

        cy.get('[type="checkbox"]').eq(0).check().should('be.checked') // check == click

    })
 
 })