const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methodsn", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("open url in new tab in browserw", async () => {
    await browser.newWindow("https://www.example.com");
    await browser.pause(2000); // Pause for 2 seconds
  });
});

 
