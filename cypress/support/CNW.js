export class functions{

    function1(){
        cy.get('[type="radio"]').then(radioButtons => {

            for(var i=0; i <= radioButtons.length-1; i++){
                cy.wrap(radioButtons).eq(i)
                .click({force:true})
                .should('be.visible')
                cy.wait(500)

            }
        })
    }

    function2(){
        cy.get('[type="radio"]').then(radioButtons => {

            cy.wrap(radioButtons).first()
                .click({force:true})
                .should('be.visible')
        })
    }
    
}

export const CNA = new functions;