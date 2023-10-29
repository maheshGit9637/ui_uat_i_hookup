const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("Minimize button in browser", async () => {
    await browser.minimizeWindow();
    //this is used to minimize the current winodw
  });
});
