const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      numTestsKeptInMemory: 0;
      video: false;
    },
  },
});
