
import { gitHubLoginURL,gitHubPricingURL, gitHubCompareURL } from "./constants";

var data = require('../fixtures/gitHubPricing.json')
var compareText = require('../fixtures/comparePage.json')

export class GitHub {

    pricingUrlVerification() {
        cy.contains('Pricing').click()
        cy.url().should('eq', gitHubPricingURL)
    }

    contact_gitHub_Verification() {
        cy.scrollTo('bottomLeft')

        cy.get('.footer > :nth-child(1) > .d-flex > :nth-child(3)').each(($el, index) => {
            const text = $el.text()
            expect(text).to.contain(data.Pricing[index])
        })
    }

    compare_gitHub_and_gitLab() {

        cy.contains('Pricing').click()
        cy.scrollTo('bottomLeft')
        cy.contains('How does GitHub compare to its main competitors?').click()
        cy.contains('GitHub compares').click()
        cy.wait(2000)
        cy.url().should('eq', gitHubCompareURL)

        cy.get('._2j0fmugLb1FgYz6KPuB91w > :nth-child(2)').click()
        cy.scrollTo('top')
        cy.get('[aria-describedby="gitlab"]').click()

        cy.get('#gitlab tbody tr th span').each(($el,index) =>{
            const text = $el.text()
            expect(text).to.eq(compareText.compareItem[index])
        })
    }

    navigateToLoginPage(){
        cy.contains('Sign in').click()
        cy.url().should('eq',gitHubLoginURL)
    }

    navigateToBack(){
        cy.go('back')
    }
}

export const gitHubPage = new GitHub;