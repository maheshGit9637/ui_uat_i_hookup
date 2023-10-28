const LoginPage = require("../../pageobjects/basePage/login.page");

describe("browser methods", () => {
  before(async () => {
    await LoginPage.open();
  });
  it("title of webpage", async () => {
    console.log("title of web page is: ", await browser.getTitle());
  });
});
