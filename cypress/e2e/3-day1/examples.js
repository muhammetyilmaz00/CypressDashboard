/// <reference types= "cypress" />

// visit
cy.visit('open url')
cy.visit('url',{timeout : 10000})


// should is promis
cy.url().should('include','blablabla')

// finding the element
var loc = '#id'
cy.get(loc).click()
cy.get(loc).should('be.visible')
cy.get(loc).should('be.exist')


// negative ones
cy.get(loc).should('not.be.visible')
cy.get(loc).should('not.be.exist')
cy.get(loc).should('not.be.disabled')

cy.get('h1').should('have.length',3)
cy.get('h1').should('have.text','blablabla')
cy.get('h1').should('have.value','cypress')

// parent to the child
cy.get(loc).first()
cy.get(loc).last()
cy.get(loc).eq(1).click()

// go back to previous page
cy.go('back')

cy.get('tbody tr').nextAll.click({multiple:true}) //10 elements

cy.get(loc).click()
cy.get(loc).prevAll.click()


// click one element and go back and click another one ....
for(var i = 0; i<=1; i++){
    cy.get('tbody tr').nextAll.click({multiple:true}) 
    cy.go('back')
}


// hover handling
cy.get(loc).trigger('mouseover').click()

cy.get(loc).trigger('mouseup').click()

cy.get('#username').clear().type('username')







