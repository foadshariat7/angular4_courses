import { First1AppPage } from './app.po';

describe('first1-app App', () => {
  let page: First1AppPage;

  beforeEach(() => {
    page = new First1AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
