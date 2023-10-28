const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("Maximize button in browser", async () => {
    await browser.maximizeWindow();
    //this is used to minimize the current winodw
    await browser.pause(5000); // Pause for 2 seconds
  });
});
