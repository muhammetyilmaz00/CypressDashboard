/// <reference types= "cypress" />

import { gitHubURL } from '../../support/authentication.js'
import { onPricingPage } from '../../support/gitHub_pricing.js'

describe('Tesla.com automation testing', () => {

    beforeEach("Navigate to page to tesla.com", () => {
        cy.visit(gitHubURL)
    })

    it('Test One', () => {
        onPricingPage.urlVerification()
        onPricingPage.contact_gitHub_Verification()
    })

})