describe('interceptコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/intercept');
  });

  describe('Waiting on a request', () => {
    it('GETリクエストが完了したあと、ステータスがGET doneになる', () => {
      cy.intercept('GET', 'https://httpbin.org/delay/*').as('dilay');
      cy.wait('@dilay');
      cy.get('#status_get')
        .should('have.text', 'GET done');
    });
    it('POSTリクエストが完了したあと、ステータスがPOST doneになる', () => {
      cy.intercept('POST', 'https://httpbin.org/delay/*').as('dilay');
      cy.wait('@dilay');
      cy.get('#status_post')
        .should('have.text', 'POST done');
    });
  });
});
