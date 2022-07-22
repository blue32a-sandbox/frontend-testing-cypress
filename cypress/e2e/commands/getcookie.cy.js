describe('getCookieコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/getcookie');
  });

  describe('Cookieを取得する', () => {
    it('存在を確認する', () => {
      cy.getCookie('hoge').should('exist');
    });
    it('値を確認する', () => {
      cy.getCookie('hoge').should('have.property', 'value', '123ABC');
    });
  });
})
