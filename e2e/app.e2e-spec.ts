import { Ng2NgrxPage } from './app.po';

describe('ngrx-individuals App', () => {
  let page: Ng2NgrxPage;

  beforeEach(() => {
    page = new Ng2NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
