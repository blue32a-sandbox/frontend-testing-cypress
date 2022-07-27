describe('shouldコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/should');
  });

  describe('Chainers', () => {
    it('チェックボックスが無効である', () => {
      cy.get(':checkbox').should('be.disabled');
    });
    it('現在のDOM要素を譲渡する', () => {
      cy.get('option:first')
        .should('be.selected')
        .then(($option) => {
          cy.log('option', $option);
        });
    });
  });

  describe('Value', () => {
    it('クラスが"form-horizontal"」で"あることを表明する', () => {
      cy.get('form').should('have.class', 'form-horizontal');
    });
    it('値が"Jane"でないことを表明する', () => {
      cy.get('input').should('not.have.value', 'Jane');
    });
    it('現在の要素を譲渡する', () => {
      cy.get('button')
        .should('have.id', 'new-user')
        .then(($button) => {
          cy.log('button', $button);
        });
    });
  });

  describe('Method and Value', () => {
    it('アンカー要素にhref属性があることを確認する', () => {
      cy.get('#header a').should('have.attr', 'href');
    });
    it('href属性が"/users"と等しいことを保証する', () => {
      cy.get('#header a').should('have.attr', 'href', '/users');

      cy.get('#header a') // yields the element
        .should('have.attr', 'href') // yields the "href" attribute
        .and('equal', '/users') // checks the "href" value
    });
  });

  describe('Focus', () => {
    it('ボタンクリック後、入力がフォーカスされたことを表明する', () => {
      cy.get('#btn-focuses-input').click()
      cy.get('#input-receives-focus').should('have.focus');
    });
  });

  describe('Function', () => {
    it('複数の<p>から長さ、内容、クラスを検証する', () => {
      cy.get('p').should(($p) => {
        expect($p).to.have.length(3);
        expect($p.first()).to.contain('Hello World');

        const classes = $p.map((i, el) => {
          return Cypress.$(el).attr('class')
        });
        expect(classes.get()).to.deep.eq([
          'text-primary',
          'text-danger',
          'text-default',
        ]);
      });
    });
    it('クラス名が見出しを含むことを確認する', () => {
      cy.get('.docs-header')
        .find('div')
        // .should(cb)のコールバックはリトライされる
        .should(($div) => {
          expect($div).to.have.length(1);

          const className = $div[0].className;

          expect(className).to.match(/heading-/);
        })
        // .then(cb)のコールバックはリトライされず、合格か不合格のどちらか
        .then(($div) => {
          expect($div).to.have.text('Introduction');
        });
    });
    it('3つの要素について、テキストの内容を確認する', () => {
      cy.get('.connectors-list > li').should(($lis) => {
        expect($lis, '3 items').to.have.length(3);
        expect($lis.eq(0), 'first item').to.contain('Walk the dog');
        expect($lis.eq(1), 'second item').to.contain('Feed the cat');
        expect($lis.eq(2), 'third item').to.contain('Write JavaScript');
      });
    });
    it('2つの要素のテキスト値を比較する', () => {
      const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase();
      let titleText;

      cy.get('.company-details')
        .find('.title')
        .then(($title) => {
          // 先頭の要素からテキストを保存する
          titleText = normalizeText($title.text())
        });

        cy.get('.company-details')
          .find('.identifier')
          .should(($identifier) => {
            const idText = normalizeText($identifier.text());
            expect(idText, 'ID').to.equal(titleText)
          });
    });
  });

  describe('Multiple Assertions', () => {
    it('複数のアサーションを連鎖させる', () => {
      cy.get('option:first')
        .should('be.selected')
        .and('have.value', '1');
    });
  });

  describe('Wait until the assertions pass', () => {
    it('Cypressは、すべてのアサーションに合格するまで、コマンドを解決しません', () => {
      cy.get('button#wait-button')
        .click()
        .should('have.class', 'active')
        .and('not.have.class', 'inactive');
    });
  });
});
