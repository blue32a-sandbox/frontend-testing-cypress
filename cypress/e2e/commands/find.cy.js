describe('findコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/find');
  });

  describe('Selector', () => {
    it('#parentの子要素からliを検索する', () => {
      cy.get('#parent')
        .find('li')
        .should('have.length', 2);
    });
  });
});
