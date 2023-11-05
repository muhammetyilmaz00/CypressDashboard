
import { gitHubPricingURL } from "./authentication";

var data = require('../fixtures/gitHubPricing.json')

export class Pricing{

    urlVerification(){
        cy.contains('Pricing').click()
        cy.url().should('eq',gitHubPricingURL)
    }

    contact_gitHub_Verification(){
        cy.scrollTo('bottomLeft')

        cy.get('.footer > :nth-child(1) > .d-flex > :nth-child(3)').each(($el,index) =>{
            const text = $el.text()
            expect(text).to.contain(data.Pricing[index])
        })
    }
}

export const onPricingPage = new Pricing;