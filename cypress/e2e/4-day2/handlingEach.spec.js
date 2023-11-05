/// <reference types= "cypress" />

var data = require('../../fixtures/staging.json')

describe('Handling each function', () =>{

    before(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').clear().type('Admin')
        cy.get('[name="password"]').clear().type('admin123')
        cy.get('[type="submit"]').click()
    })
    
    it('Testing each test',()=>{
        cy.get('.orangehrm-quick-launch-heading').each(($el,index) => {
            cy.log('element : ',$el.text())
            const text = $el.text()

            expect(text).to.contain(data.quickLaunch[index])
        })
    })
})