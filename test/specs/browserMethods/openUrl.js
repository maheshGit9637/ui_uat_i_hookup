const LoginPage = require("../../pageobjects/basePage/login.page");
const HomePage = require("../../pageobjects/homePage/homePage");

describe("browser methods", () => {
  it("open url in browser", async () => {
    browser.url("https://www.google.co.in");
  });
  xit("what happens if you do not give https", async () => {
    browser.url("www.google.co.in");
  }); //it tries to open http://localhost/www.google.co.in which is not valid
  //error thrown - unknown error: net::ERR_CONNECTION_REFUSED
});
