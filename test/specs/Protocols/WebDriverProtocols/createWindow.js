const LoginPage = require("../../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("create Window/tab", async () => {
    await browser.createWindow('tab')
    console.log((await browser.getWindowHandles()).length) // returns `2`
    console.log(await browser.getUrl()) // returns "data:,"
    await browser.pause(4000); // Pause for 4 seconds
  });
});
