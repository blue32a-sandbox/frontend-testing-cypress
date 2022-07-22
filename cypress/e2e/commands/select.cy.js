describe('selectコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/select');
  });

  describe('Text Content', () => {
    it('optionのテキスト"apples"で選択', () => {
      cy.get('select#single-select')
        .select('apples')
        .should('have.value', '456');
    });
  });

  describe('Value', () => {
    it('optionの値"458"で選択', () => {
      cy.get('select#single-select')
        .select('458')
        .should('have.value', '458');
    });
  });

  describe('Index', () => {
    it('optionのインデックス 1 で選択', () => {
      cy.get('select#single-select')
        .select(1)
        .should('have.value', '457');
    });
  });

  describe('Select multiple options', () => {
    it('optionのテキスト"apples"と"bananas"を選択', () => {
      cy.get('select#multiple-select')
        .select(['apples', 'bananas'])
        .invoke('val')
        .should('deep.equal', ['456', '458']);
    });

    it('optionの値"456"と"457"を選択', () => {
      cy.get('select#multiple-select')
        .select(['456', '457'])
        .invoke('val')
        .should('deep.equal', ['456', '457']);
    });

    it('optionのインデックス 1 と 2 を選択', () => {
      cy.get('select#multiple-select')
        .select([1, 2])
        .invoke('val')
        .should('deep.equal', ['457', '458']);
    });
  });
});
