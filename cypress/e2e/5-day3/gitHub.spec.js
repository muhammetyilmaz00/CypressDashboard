/// <reference types= "cypress" />

import { gitHubURL } from '../../support/authentication.js'
import { onPricingPage } from '../../support/gitHub_pricing.js'

describe('GitHub.com automation testing', () => {

    beforeEach("Navigate to page to github.com", () => {
        cy.visit(gitHubURL)
    })

    it('Verify URL and check the footer of the Pricing page', () => {
        onPricingPage.urlVerification()
        onPricingPage.contact_gitHub_Verification()
    })

})