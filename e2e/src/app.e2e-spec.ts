import { AppPage } from './app.po';

describe('App creada correctamene', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Pagina en funcionamiento', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Start with Ionic UI Components');
  });
});
