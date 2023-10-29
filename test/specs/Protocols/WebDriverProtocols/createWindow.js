const LoginPage = require("../../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("create Window/tab", async () => {
    await browser.createWindow("tab");//used to create a new tab
    await browser.pause(4000); // Pause for 4 seconds
    await browser.createWindow("window");//used to create a browser window itself
    console.log((await browser.getWindowHandles()).length); // returns `2`
    console.log(await browser.getUrl()); // returns "data:,"
    await browser.pause(4000); // Pause for 4 seconds
  });
});
