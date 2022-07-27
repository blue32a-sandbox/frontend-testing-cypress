describe('itsコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/its');
  });

  describe('Objects', () => {
    it('プロパティを取得', () => {
      cy.wrap({ age: 42 })
        .its('age')
        .should('eq', 42);
    });
  });

  describe('Arrays', () => {
    it('インデックスを取得', () => {
      cy.wrap(['apples', 'oranges', 'bananas'])
        .its(1)
        .should('eq', 'oranges');
    });
  });

  describe('DOM Elements', () => {
    it('DOM要素のlengthプロパティを取得する', () => {
      cy.get('ul li')
        .its('length')
        .should('be.gt', 2);
    });
  });

  describe('Requests', () => {
    it('レスポンス本文のurlオブジェクトを取得', () => {
      cy.request('https://httpbin.org/get')
        .its('body.url')
        .then((url) => {
          expect(url).to.be.eq('https://httpbin.org/get');
        });
    });
  });

  describe('Strings', () => {
    it('タイトルの長さを取得する', () => {
      cy.title()
        .its('length')
        .should('eq', 11);
    });
  });

  describe('Functions', () => {
    it('関数をプロパティとして取得する', () => {
      const fn = () => {
        return 42;
      };

      cy.wrap({ getNum: fn })
        .its('getNum')
        .should('be.a', 'function');
    });
  });

  describe('Nested Properties', () => {
    it('ドット記法でネストしたプロパティを掘り下げて取得する', () => {
      const user = {
        contacts: {
          work: {
            name: 'Kamil',
          },
        },
      };

      cy.wrap(user)
        .its('contacts.work.name')
        .should('eq', 'Kamil');
    });
  });

  describe('Existence', () => {
    it('windowのlocationプロパティを取得する', () => {
      cy.window()
        .its('location')
        .then((location) => {
          console.log(location);
        });
    });
  });
});
