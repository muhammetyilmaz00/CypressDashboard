/// <reference types= "cypress" />

var data = require('../../../fixtures/states.json')


describe('Dropdown Testing', () =>{
    
    it('State Selection',()=>{

        cy.visit('https://demoqa.com/select-menu')

        cy.get('[id="oldSelectMenu"] > option').each(($el,index) =>{

        const text  = $el.text()

        expect(text).to.contain(data.states[index])

        cy.get('[id="oldSelectMenu"]').select($el.text()).should('be.visible')
        })


    })
})