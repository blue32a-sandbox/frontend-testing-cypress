describe('interceptコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/request');
  });

  describe('Request', () => {
    it('URL', () => {
      cy.request('https://httpbin.org/get');
    });
    it('Method and URL', () => {
      cy.request('DELETE', 'https://httpbin.org/delete')
        .then((response) => {
          expect(response.status).to.be.eq(200);
        });
    });
    it('Method, URL, and Body', () => {
      cy.request('POST', 'https://httpbin.org/post', { hoge: 'fuga' })
        .then((response) => {
          expect(JSON.parse(response.body.data).hoge).to.be.equal('fuga');
        });
    });
  });

  describe('Options', () => {
    it('自動リダイレクトを無効にした状態でページを要求する', () => {
      cy.request({
        url: 'https://httpbin.org/redirect-to?url=https://httpbin.org/get',
        followRedirect: false,
      })
      .then((response) => {
        expect(response.status).to.eq(302);
        expect(response.redirectedToUrl).to.eq('https://httpbin.org/get');
      });
    });
  });
});
