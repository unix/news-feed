import { RendererPage } from './app.po';

describe('renderer App', function() {
  let page: RendererPage;

  beforeEach(() => {
    page = new RendererPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
