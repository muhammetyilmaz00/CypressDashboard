/// <reference types= "cypress" />

describe('Conditional testing', () => {
    // 
    it('Test Vikovoyage exist using lenght', () => {

        cy.visit('/')
        cy.url().should('eq', 'https://www.wikipedia.org/')

        cy.get('body').then((body)=>{

            if (body.find('[data-jsl10n="wikivoyage.name1"]').length > 0) {
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.url().should('eq', 'https://www.wikivoyage.org/')
            } else {
                cy.get('[data-jsl10n="commons.name"]').click()
                cy.url().should('eq', 'https://commons.wikimedia.org/wiki/Main_Page')
            }
        })

    })

})