describe('typeコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/type');
  });

  describe('Input', () => {
    it('inputに入力する', () => {
      cy.get('input#text')
        .type('Hello, World');
      cy.get('input#text')
        .should('have.value', 'Hello, World');
    });
    it('textareaに入力する', () => {
      cy.get('textarea#textarea')
        .type('Hello,{enter}World');
      cy.get('textarea#textarea')
        .should('have.value', "Hello,\nWorld");
    });
    it('datalistから選択する', () => {
      cy.get('input#datalist')
        .type('Banana');
      cy.get('input#datalist')
        .should('have.value', 'Banana');
    });
    it('非入力要素または非テキストエリア要素に入力する', () => {
      cy.get('#el')
        .type('supercalifragilisticexpialidocious');
    });
    it('有効な日付を入力する', () => {
      cy.get('input#date')
        .type('2022-07-25');
    });
    it('有効な月を入力する', () => {
      cy.get('input#month')
        .type('2022-07');
    });
    it('有効な週を入力する', () => {
      cy.get('input#week')
        .type('2022-W07');
    });
    it('有効な時間を入力する', () => {
      cy.get('input#time')
        .type('23:02:15');
    });
  });
});
