const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.wikipedia.org/',
    pageLoadTimeout : 4000,
    viewportHeight : 1028,
    viewportWidth : 1920,
    failOnStatusCode: false,
    chromeWebSecurity: false,
    hideXHRInCommandLog: true,
    specPattern: [
      'cypress/e2e/*.js',
      'cypress/e2e/**/*.js'
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
