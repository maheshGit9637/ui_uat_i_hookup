const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("back button in browser", async () => {
    browser.printPage(scale, background, width, height, top, bottom, left, right, shrinkToFit, pageRanges);
    await browser.pause(4000); // Pause for 2 seconds
  });
});
