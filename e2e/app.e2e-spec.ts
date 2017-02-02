import { CascadingDropDownPage } from './app.po';

describe('cascading-drop-down App', function() {
  let page: CascadingDropDownPage;

  beforeEach(() => {
    page = new CascadingDropDownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
