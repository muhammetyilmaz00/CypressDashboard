/// <reference types= "cypress" />

import { gitHubURL } from '../../support/authentication.js'
import { gitHubPage } from '../../support/gitHub_pricing.js'

describe('GitHub.com automation testing', () => {

    beforeEach("Navigate to page to github.com", () => {
        cy.visit(gitHubURL)
    })

    it('Verify URL and check the footer of the Pricing page', () => {
        gitHubPage.pricingUrlVerification()
        gitHubPage.contact_gitHub_Verification()
    })

    it('Compare GitHub and GitLab',()=>{
        gitHubPage.compare_gitHub_and_gitLab()
    })

    it('Navigate to Login page',()=>{
        gitHubPage.navigateToLoginPage()
    })

    it('Navigate to main page',()=>{
        gitHubPage.navigateToLoginPage()
        gitHubPage.navigateToBack()
    })

})
