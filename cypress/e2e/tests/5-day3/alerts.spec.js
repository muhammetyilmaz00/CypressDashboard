/// <reference types= "cypress" />

var data = require('../../../fixtures/states.json')


describe('JavaScript Alerts Testing', () =>{

    beforeEach('Navigate the Alerts Page',()=>{
        cy.visit('https://demoqa.com/alerts')
    })
    
    it('Handling Js Alert - Validate Alert Test and Click OK',()=>{

        cy.get('#alertButton').click()

        cy.on('window:alert',(str) =>{
            expect(str).to.equal('You clicked a button')
        })

        cy.on('window:confirm',()=>true)

    })

    it('Handling Js Confirm - Click OK',()=>{

        cy.get('#confirmButton').click()

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Do you confirm action?')
        })

        cy.on('window:confirm',()=>true)

        cy.get('#confirmResult').should('have.text','You selected Ok')

    })

    it('Handling Js Confirm - Click Cancel',()=>{

        cy.get('#confirmButton').click()

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal('Do you confirm action?')
        })

        cy.on('window:confirm',()=>false)

        cy.get('#confirmResult').should('have.text','You selected Cancel')

    })

    it('Handling Js Prompt - Input text in prompt,Click OK and Validate the input text',()=>{

        cy.window().then(($window) =>{
            cy.stub($window,'prompt').returns('Prompt')
            cy.get('#promtButton').click()
        })

        cy.get('#promptResult').should('have.text','You entered Prompt') 

    })
})