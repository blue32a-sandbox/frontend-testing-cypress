describe('screenshotコマンドのテスト', () => {
  beforeEach(() => {
    cy.visit('/commands/screenshot');
  });

  describe('No Args', () => {
    it('スクリーンショットを撮る', () => {
      cy.screenshot();
    });
  });

  describe('Filename', () => {
    it('スクリーンショットを撮影し、特定のファイル名で保存する', () => {
      cy.screenshot('some-filename');
    });
    it('スクリーンショットを撮影し、特定のディレクトリに保存する', () => {
      cy.screenshot('commands/screenshot/some-filename');
    });
  });

  describe('Clip', () => {
    it('スクリーンショットを特定の位置とサイズに切り取る', () => {
      cy.screenshot({
        clip: {
          x: 20,
          y: 20,
          width: 400,
          height: 300
        }
      });
    });
  });

  describe('Screenshot an element', () => {
    it('最初の.post要素のスクリーンショットを撮る', () => {
      cy.get('.post')
        .first()
        .screenshot();
    });
    it('最初の.post要素の周りに10pxのパディングがある状態のスクリーンショットを撮る', () => {
      cy.get('.post')
        .first()
        .screenshot({ padding: 10 });
    });
    it('キャプチャした要素をクリックするスクリーンショットをチェーンオフする', () => {
      cy.get('button')
        .screenshot()
        .click();
    });
  });
});
