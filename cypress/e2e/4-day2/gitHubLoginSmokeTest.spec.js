/// <reference types= "cypress" />


describe('Login Page Smoke Test', () => {

    it('Right userName wrong password Negative Testing', () => {
        cy.login_Negative_Password_Scenario()
    })

    it('Wrong userName right password Negative Testing', () => {
        cy.login_Negative_Username_Scenario()
    })

    
    it('Wrong userName wrong password Negative Testing', () => {
        cy.login_Negative_Username_Password_Scenario()
    })

})