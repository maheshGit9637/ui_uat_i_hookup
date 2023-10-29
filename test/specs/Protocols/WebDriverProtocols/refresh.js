const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("refresh button in browser", async () => {
    await browser.refresh();
    await browser.pause(2000); // Pause for 2 seconds
    await browser.refresh();
    await browser.pause(2000); // Pause for 2 seconds
    await browser.refresh();
  });
});
