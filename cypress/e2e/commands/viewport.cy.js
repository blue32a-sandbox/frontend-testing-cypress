describe('viewportコマンドのテスト', () => {
  const URL = '/commands/viewport';

  describe('iphone-x', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
      cy.visit(URL);
    });
    it('.spは見えて、.pcは見えない', () => {
      cy.get('.sp').should('be.visible');
      cy.get('.pc').should('not.be.visible');
    });
  });

  describe('ipad', () => {
    beforeEach(() => {
      cy.viewport('ipad-2');
      cy.visit(URL);
    });
    it('.spは見えて、.pcは見えない', () => {
      cy.get('.sp').should('be.visible');
      cy.get('.pc').should('not.be.visible');
    });
  });

  describe('ipad landscape', () => {
    beforeEach(() => {
      cy.viewport('ipad-2', 'landscape');
      cy.visit(URL);
    });
    it('.pcは見えて、.spは見えない', () => {
      cy.get('.pc').should('be.visible');
      cy.get('.sp').should('not.be.visible');
    });
  });

  describe('PC', () => {
    beforeEach(() => {
      cy.viewport(1024, 800);
      cy.visit(URL);
    });
    it('.pcは見えて、.spは見えない', () => {
      cy.get('.pc').should('be.visible');
      cy.get('.sp').should('not.be.visible');
    });
  });
});
