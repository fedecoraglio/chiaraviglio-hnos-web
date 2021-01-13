import { ChiaraviglioHnosWebPage } from './app.po';

describe('chiaraviglio-hnos-web App', () => {
  let page: ChiaraviglioHnosWebPage;

  beforeEach(() => {
    page = new ChiaraviglioHnosWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
