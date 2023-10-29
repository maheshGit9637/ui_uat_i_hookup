const LoginPage = require("../../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("back button in browser", async () => {
    //browser.printPage(scale, background, width, height, top, bottom, left, right, shrinkToFit, pageRanges);
    const printedPage = await browser.printPage();
    console.log(printedPage); // returns pdf in base 64 format "aW1wb3J0IHsgYnJvd3NlciwgZXhw...." in base64 format you need to decode it to get the pdf
    await browser.pause(4000); // Pause for 2 seconds
  });
});
