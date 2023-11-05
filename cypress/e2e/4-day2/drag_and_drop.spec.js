/// <reference types= "cypress" />

describe('Drag and drop feature', () =>{
    
    it('Drag and drop using data transfer',()=>{
        cy.visit('https://demo.automationtesting.in/Static.html')

        drag_and_drop()

    })
})

const dataTransfer = new DataTransfer;

function drag_and_drop(){
    cy.get('#angular').should('be.visible').trigger('dragstart')
    cy.wait(500)
    
    cy.get('#droparea').should('be.visible').trigger('drop',{dataTransfer})
    cy.wait(500)
    cy.get('#droparea').should('be.visible').trigger('dragend')

}