/// <reference types= "cypress" />

describe('Web elements', () => {

   // Tag Name
   cy.get('input')

   // by ID
   cy.get('#radio1')

   // by Class Name
   cy.get('.iCheck-helper')

   // by Attribute Name
   cy.get('[type="radio"]')

   // by Attribute Name and Value
   cy.get('[name="abuse"]')

   //by Class Value
   cy.get('[class="iCheck-helper"]')

   // by Tag Name and Attribute with Value
   cy.get('input [name="abuse"]')

   // by two different attributes
   cy.get('[name="abuse"][class="iCheck-helper"][name="abuse"]')

   cy.contains('Text').click()

})