const { $ } = require("@wdio/globals");
const Page = require("./page");

const SELECTORS = {
  head1: "h1",
  head2: "h2",
};

const HomePage = {
  header1() {
    const element = $(SELECTORS.head1).getText();
    return element;
  },
};

module.exports = HomePage;
