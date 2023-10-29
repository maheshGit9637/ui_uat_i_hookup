const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("open url in same tab in browser", async () => {
    await browser.navigateTo("https://www.example.com/");
    await expect(browser).toHaveUrl("https://www.example.com/");
  });
});
