describe('setCookieコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/setcookie');
  });

  describe('クッキーを設定する', () => {
    it('キーと値', () => {
      cy.getCookies().should('be.empty');
      cy.setCookie('hoge', '123ABC');
      cy.getCookie('hoge').should('have.property', 'value', '123ABC');
    });

    it('キーと値とオプション', () => {
      cy.getCookies().should('be.empty');
      cy.setCookie('fuga', 'ABC123', {secure: true});
      cy.getCookie('fuga').should((cookie) => {
        expect(cookie.value).to.equal('ABC123');
        expect(cookie.secure).to.be.true;
      });
    });
  });
});
