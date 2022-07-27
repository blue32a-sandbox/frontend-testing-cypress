describe('containsコマンドのテスト', () => {
  const URL = '/commands/contains';

  describe('コンテンツ', () => {
    it('テキストを含む最初の要素を検索', () => {
      cy.visit(URL);

      cy.contains('apples');
    })

    it('input[type="submit"]の値で検索', () => {
      cy.visit(URL);

      cy.get('form').contains('submit the form!');
    })
  })

  describe('数値', () => {
    it('数値を含む最初の要素を検索', () => {
      cy.visit(URL);

      cy.contains(4);
    })
  })

  describe('正規表現', () => {
    it('正規表現にマッチするテキストを含む最初の要素を検索', () => {
      cy.visit(URL);

      cy.contains(/^b\w+/);
    })
  })

  describe('セレクター', () => {
    it('特定の要素を返すセレクタを指定', () => {
      cy.visit(URL);

      cy.contains('ul', 'apples');
    })
  })

  describe('大文字小文字の区別', () => {
    it('大文字小文字を無視する', () => {
      cy.visit(URL);

      // cy.get('div').contains('capital sentence'); // fail
      cy.get('div').contains('capital sentence', { matchCase: false });
    })
  })
})
