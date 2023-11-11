/// <reference types= "cypress" />


var data = require('../../fixtures/amazon.json')

describe('Amazon test cases', () => {

    beforeEach('Navigate to page amazon.com', () => {
        cy.visit('https://www.amazon.com/')

        cy.get('[data-action-type="DISMISS"]').then(($el) => {
            cy.get('[data-action-type="DISMISS"]').click()
        })

    })

    afterEach('Clear Cookies',()=>{
        cy.clearCookies()
    })

    it('Login to the amazon', () => {

        cy.get('#nav-xshop .nav-a  ').each(($el, index) => {
            const text = $el.text()
            expect(text).to.eq(data.etsy[index])
        })

    })

    it('Navigate to page to Todays Deals', () => {
        cy.scrollTo('topLeft')
        cy.contains("Today's Deals").click()
        cy.scrollTo('bottomLeft')
        cy.get('.nav_last .nav_a').contains('Help')

    })

    it('Navigate to page to Help Center', () => {

        cy.scrollTo('bottomLeft')
        cy.get('.nav_last .nav_a').contains('Help').click()
        cy.wait(1000)
        cy.url().should('eq','https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he')
        cy.contains('Payment, charges or gift cards').should('exist')
    })

})

