describe('getコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/get');
    cy.get('button[type=submit]').as('submitBtn');
    cy.fixture('users.json').as('users');
  });

  describe('セレクタ', () => {
    it('入力要素を取得する', () => {
      cy.get('input').should('be.disabled');
    });
    it('ulの中の最初のliの子孫を探す', () => {
      cy.get('input').should('be.disabled');
    });
    it('ドロップダウンメニューを探し、クリックする', () => {
      cy.get('.dropdown-menu').click();
    });
    it('与えられたデータ属性を持つ5つの要素を検索する', () => {
      cy.get('[data-test-id="test-example"]').should('have.length', 5);
    });
    it('href属性に "questions "が含まれるリンクを探し、クリックする', () => {
      cy.get('a[href*="questions"]').click();
    });
    it('idが"local-"で始まる要素を検索する', () => {
      cy.get('[id^=local-]');
    });
    it('idが"-remote"で終わる要素を検索する', () => {
      cy.get('[id$=-remote]');
    });
    it('idが"local-"で始まり、"-remote"で終わる要素を検索する', () => {
      cy.get('[id^=local-][id$=-remote]');
    });
    it('CSSで使われる"."や":"などの文字が含まれる要素をidで検索する', () => {
      cy.get('#id\\.\\.\\.1234');
    });
  });

  describe('withinコマンドの中で取得', () => {
    it('formの中のinputとtextareaに入力する', () => {
      cy.get('form').within(() => {
        cy.get('input').type('Pamela');
        cy.get('textarea').type('is a developer');
      });
    });
  });

  describe('getとfindの比較', () => {
    it('getとfindの比較の例', () => {
      // #comparisonの外側にある"div.test-title"と、内側の"div.feature"を検出する
      cy.get('#comparison')
        .get('div')
        .should('have.class', 'test-title')
        .and('have.class', 'feature');

      // #comparison要素のツリーに限定して検索するため、"div.feature"のみが検出される
      cy.get('#comparison')
        .find('div')
        .should('have.length', 1)
        .and('have.class', 'feature');
    });
  });

  describe('エイリアス', () => {
    it('エイリアスの"todos"要素を取得する', () => {
      cy.get('ul#todos').as('todos');
      cy.get('@todos');
    });
    it('エイリアスの"submitBtn"要素を取得する', () => {
      cy.get('@submitBtn').should('be.disabled');
    });
    it('エイリアスの"users"フィクスチャを取得する', () => {
      cy.get('@users').then((users) => {
        const user = users[0];

        cy.get('header').contains(user.name);
      });
    });
  });
});
