describe('clickコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/click');
  });

  describe('No Args', () => {
    it('アンカーリンクをクリック', () => {
      cy.get('.link a').click();
      cy.url().should('include', '/commands/click/#link');
    });
  });

  describe('Options', () => {
    it('無効なcheckboxを強制クリック', () => {
      cy.get('.force-click input')
        .click({ force: true })
        .should('be.checked');
    });

    it('複数のチェックボックスをまとめてクリック', () => {
      cy.get('.multiple-click input')
        .click({ multiple: true })
        .should('be.checked');
    });
  });
})
