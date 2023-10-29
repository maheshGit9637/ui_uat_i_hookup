const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("back button in browser", async () => {
    await browser.pause(4000); // Pause for 2 seconds
  });
});
