import { InventoryManagementPage } from './app.po';

describe('inventory-management App', () => {
  let page: InventoryManagementPage;

  beforeEach(() => {
    page = new InventoryManagementPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
