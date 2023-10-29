const LoginPage = require("../../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("switch to tab 1,2 and again 1,0", async () => {
    await browser.newWindow("https://www.google.co.in");
    await browser.newWindow("https://www.countries-ofthe-world.com/capitals-of-the-world.html");
    await browser.newWindow("https://www.w3schools.com/");
    console.log("type of getWindowHandles : ", typeof(await browser.getWindowHandles()));
    console.log("window handles are : ", await browser.getWindowHandles());
    const tabs=await browser.getWindowHandles();
    await browser.switchToWindow(tabs[0]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[1]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[2]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[3]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[2]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[1]);
    await browser.pause(4000); // Pause for 2 seconds
    await browser.switchToWindow(tabs[0]);
    await browser.pause(4000); // Pause for 2 seconds
    console.log("how many tabs are there? : ",tabs.length);
  });
});
