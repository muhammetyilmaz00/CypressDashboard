/// <reference types= "cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

import { gitHubLoginURL, userName, password, wrongUserName, wrongPassword, loginPageErrorMessage } from '../support/constants.js';

Cypress.Commands.add('login_Positive_Scenario', () => {
    cy.visit(gitHubLoginURL)
    cy.get('#login_field').clear().type(userName)
    cy.get('#password').clear().type(password)
    cy.get('[value="Sign in"]').click()
})

Cypress.Commands.add('login_Negative_Password_Scenario', () => {
    cy.visit(gitHubLoginURL)
    cy.get('#login_field').clear().type(userName)
    cy.get('#password').clear().type(wrongPassword)
    cy.wait(1000)
    cy.get('[value="Sign in"]').click()

    cy.get('.js-flash-alert').should('be.visible')
    cy.get('.js-flash-alert').should('contain',loginPageErrorMessage)
})

Cypress.Commands.add('login_Negative_Username_Scenario', () => {
    cy.visit(gitHubLoginURL)
    cy.get('#login_field').clear().type(wrongUserName)
    cy.get('#password').clear().type(password)
    cy.wait(1000)
    cy.get('[value="Sign in"]').click()

    cy.get('.js-flash-alert').should('be.visible')
    cy.get('.js-flash-alert').should('contain',loginPageErrorMessage)
})

Cypress.Commands.add('login_Negative_Username_Password_Scenario', () => {
    cy.visit(gitHubLoginURL)
    cy.get('#login_field').clear().type(wrongUserName)
    cy.get('#password').clear().type(wrongPassword)
    cy.wait(1000)
    cy.get('[value="Sign in"]').click()

    cy.get('.js-flash-alert').should('be.visible')
    cy.get('.js-flash-alert').should('contain',loginPageErrorMessage)
})

