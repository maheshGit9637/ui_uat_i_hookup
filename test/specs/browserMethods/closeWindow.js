const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("close button in browser", async () => {
    await browser.newWindow("https://www.example.com");
    console.log("url is : "+await browser.getUrl());
    await browser.closeWindow();
    await browser.pause(2000); // Pause for 2 seconds

    //whatever window was availabel in the context will be closed and no further actions will be accepted
    //as browser object will not be able to see any target window
    //you need to set the target window, so that browser can interact with

    const windowHandles = await browser.getWindowHandles();
    if (windowHandles.length > 0) {
      await browser.switchToWindow(windowHandles[0]);
    }
    console.log("url is : "+await browser.getUrl());
    await browser.pause(2000); // Pause for 2 seconds
  });
});
