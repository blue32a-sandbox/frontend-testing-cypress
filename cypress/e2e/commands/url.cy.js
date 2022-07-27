describe('urlコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/url');
  });

  describe('No Args', () => {
    it('URLの一部を検証する', () => {
      cy.url().should('include', '/commands/url/');
    });
    it('URLの完全一致を検証する', () => {
      cy.url().should('eq', 'http://127.0.0.1:5500/commands/url/');
    });
  });

  describe('Option', () => {
    it('URLをデコードして検証する', () => {
      cy.get('a').click();
      cy.url({ decode: true }).should('include', '#あいうえお');
    });
  });
})
