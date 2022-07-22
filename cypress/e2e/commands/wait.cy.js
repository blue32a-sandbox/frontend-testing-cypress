describe('waitコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/wait');
  });

  describe('Time', () => {
    it('5秒待つ', () => {
      cy.get('#content').should('not.be.visible');
      cy.wait(5000);
      cy.get('#content').should('be.visible');
    });
  });
})
