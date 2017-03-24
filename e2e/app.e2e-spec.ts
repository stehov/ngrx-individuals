import { Ng2NgrxPage } from './app.po';

describe('ng2-ngrx App', () => {
  let page: Ng2NgrxPage;

  beforeEach(() => {
    page = new Ng2NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
