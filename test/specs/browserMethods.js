const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const HomePage = require("../pageobjects/homePage");

describe("My Login application", () => {
  it("should be able to open the website and browse", async() => {
    await LoginPage.open()
    console.log("header on page is: ", await HomePage.headers1());
  });
  it("Maximize the window", async() => {
    await browser.maximizeWindow();
    await browser.pause(5000); // Pause for 5 seconds
  });
  it("Minimize the window", async() => {
    await browser.minimizeWindow();
    await browser.pause(5000); // Pause for 5 seconds
  });

  it("get the window size", async() => {
    // Store the window size in a variable
      const windowSize = await browser.getWindowSize();
    // You can now access the width and height properties of windowSize
    await console.log(`Width: ${windowSize.width}, Height: ${windowSize.height}`);
    await browser.pause(5000); // Pause for 5 seconds
  });

  it("set the window size", async() => {
    await browser.getWindowSize(); // You can retrieve the size as needed.
    await browser.setWindowSize(1200, 800);
    await browser.pause(5000); // Pause for 5 seconds
  });

  it("open new tab in the window size", async() => {
    await browser.newWindow("https://example.com", "Example", {
      windowName: "example",
    });
    await browser.pause(2000); // Pause for 5 seconds
  });

  it("switch to tabs", async() => {
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[0]); // Replace [1] with the desired window index
    await browser.pause(2000); // Pause for 5 seconds
  });

  it("go to url", async() => {
    await browser.url("https://www.google.co.in");
    await browser.back();
    await browser.pause(2000);
  });

  it("hit forward button in browser", async() => {
    await browser.forward();
    await browser.pause(2000);
  });

  it("hit back button in browser", async() => {
    await browser.back();
    await browser.pause(2000);
  });

  it("hit reload/refresh button in browser", async() => {
    await browser.refresh();
    await browser.pause(2000);
  });

  it("close current tab in browser", async() => {
    await browser.closeWindow();
    await browser.pause(2000);
  });
});
