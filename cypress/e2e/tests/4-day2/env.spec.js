/// <reference types= "cypress" />

var prodData = require('../../../fixtures/prod.json')
var stagingData = require('../../../fixtures/staging.json')
var uatData = require('../../../fixtures/uat.json')

describe('Environment files', () => {

    it('test env', () => {

        cy.visit('https://www.wplounge.nl/wordpress-staging-website/')

        if (cy.url().contains('staging')) {
            cy.fixture('staging.json').then((stagingData) => {
                stagingData.username()
                stagingData.url()
                stagingData.password()
            })
        } else if (url.include('uat')) {
            cy.fixture('uat.json').then((uatData) => {

            })
        } else if (url.include('prod')) {
            cy.fixture('prod.json').then((prodData) => {

            })
        }
    })
})