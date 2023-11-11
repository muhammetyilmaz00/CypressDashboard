/// <reference types= "cypress" />

import { URL } from "../../support/commands"
import {CNA} from "../../support/CNW"

describe('Radio button tests', () => {

    beforeEach('open the url',()=>{
        cy.visit(URL)
    })

    it('Verify all the radio buttons are checked',()=>{

        CNA.function1()

        // cy.get('[type="radio"]').then(radioButtons => {

        //     for(var i=0; i <= radioButtons.length-1; i++){
        //         cy.wrap(radioButtons).eq(i)
        //         .click({force:true})
        //         .should('be.visible')
        //         cy.wait(500)

        //     }
        // })
    })

    it('Verify all the radio buttons are checked',()=>{

        CNA.function2()
    })
 
 })