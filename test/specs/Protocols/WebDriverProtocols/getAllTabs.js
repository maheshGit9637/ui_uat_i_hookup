const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("all tabs in browser", async () => {
    console.log("type of getWindowHandle : ", typeof(await browser.getWindowHandle()));
    console.log("window handle is : ", await browser.getWindowHandle());

    console.log("type of getWindowHandles : ", typeof(await browser.getWindowHandles()));
    console.log("window handles are : ", await browser.getWindowHandles());
  });
});
