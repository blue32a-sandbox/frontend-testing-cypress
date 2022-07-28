describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })

  it('Local site', () => {
    // See 'baseUrl' in cypress.config.js
    cy.visit('/');

    cy.contains('Dummy Site');
  })
})
