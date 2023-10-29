const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("forward button in browser", async () => {
    const firstUrl=await browser.getUrl();
    await browser.navigateTo("https://www.example.com/");
    const secondUrl=await browser.getUrl();
    await browser.pause(2000); // Pause for 2 seconds
    await browser.back();
    await browser.pause(2000); // Pause for 2 seconds
    await expect(browser).toHaveUrl(firstUrl);
    await browser.pause(2000); // Pause for 2 seconds
    await browser.forward();
    await browser.pause(2000); // Pause for 2 seconds
    await expect(browser).toHaveUrl(secondUrl);
    console.log(firstUrl);
    console.log(secondUrl);
  });
});
