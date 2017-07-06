import { LightBoardPage } from './app.po';

describe('light-board App', () => {
  let page: LightBoardPage;

  beforeEach(() => {
    page = new LightBoardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
