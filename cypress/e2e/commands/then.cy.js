describe('thenコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/then');
  });

  describe('DOM element', () => {
    it('button要素が与えられる', () => {
      cy.get('button').then(($btn) => {
        const cls = $btn.attr('class');

        cy.wrap($btn).click().should('not.have.class', cls);
      });
    });
    it('前のコマンドから得られた数値が与えられる', () => {
      cy.wrap(1)
        .then((num) => {
          cy.wrap(num).should('equal', 1);
        })
        .should('equal', 1);
    });
  });

  describe('Change subject', () => {
    it('別のコマンドで要素を変更する', () => {
      cy.get('button')
        .then(($btn) => {
          const cls = $btn.attr('class');
          cy.wrap($btn)
            .click()
            .should('not.have.class', cls)
            .find('i');
          // 明示的な戻り値がないため、最後の Cypress コマンドの yield が返される
        })
        .should('have.class', 'spin'); // assert on i element
    });
    it('別のコマンドで番号を変更する', () => {
      cy.wrap(1)
        .then((num) => {
          cy.wrap(num).should('equal', 1);
          cy.wrap(2);
        })
        .should('equal', 2);
    });

    /**
     * エラーが出るのでskip
     * @see {@link https://github.com/cypress-io/cypress-documentation/issues/4617}
     */
    it.skip('returnすることで番号を変更する', () => {
      cy.wrap(1)
        .then((num) => {
          cy.wrap(num).should('equal', 1);
          return 2;
        })
        .should('equal', 2);
    });

    it('undefinedを返しても、生成される対象は変更されない', () => {
      cy.get('form')
        .then(($form) => {
          console.log('form is:', $form);
          // ここで未定義を返しますが、$form は継続して連鎖できるように返される
        })
        .find('input') // $formからinputを検索
        .then(($input) => {
          // ここでは$input要素を使用する
          expect($input).to.have.value('hoge');
        });
    });
  });

  describe('Raw HTMLElements are wrapped with jQuery', () => {
    it('divはjQueryでラップされる', () => {
      cy.get('div')
        .then(($div) => {
          console.log('div 0', $div[0]);
          return $div[0];
        })
        .then(($div) => {
          expect($div).to.have.text('1');
        });
    });
  });

  describe.skip('Promises', () => {
  });
});
