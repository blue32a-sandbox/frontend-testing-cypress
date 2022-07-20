describe('andコマンド', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('SITE_URL') + '/commands/and');
  });

  describe('Chainers', () => {
    it('同じテーマで連鎖的に主張する', () => {
      cy.get('button')
        .should('have.class', 'active')
        .and('not.be.disabled');
    });
  });

  describe('Value', () => {
    it('イールドの変更時にアサーションを連鎖させる', () => {
      cy.get('a')
        .should('contain', 'Edit User') // yields <a>
        .and('have.attr', 'href') // yields string value of href
        .and('match', /users/) // yields string value of href
        .and('not.include', '#');
    });
  });

  describe('Method and Value', () => {
    it('hrefが"/users"と等しいことを保証する', () => {
      cy.get('#header a')
        .should('have.class', 'active')
        .and('have.attr', 'href', '/users');
    });
  });

  describe('Function', () => {
    it('複数の<p>から長さ、内容、クラスを検証する', () => {
      cy.get('p')
        .should('not.be.empty')
        .and(($p) => {
          // should have found 3 elements
          expect($p).to.have.length(3)

          // make sure the first contains some text content
          expect($p.first()).to.contain('Hello World')

          // use jquery's map to grab all of their classes
          // jquery's map returns a new jquery object
          const classes = $p.map((i, el) => {
            return Cypress.$(el).attr('class')
          })

          // call classes.get() to make this a plain array
          expect(classes.get()).to.deep.eq([
            'text-primary',
            'text-danger',
            'text-default',
          ])
        });
    });
  });
})
