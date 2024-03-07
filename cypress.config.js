const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  // videoCompression: 32,
  reporter: 'cypress-mochawesome-reporter', // for HTML Report
  reporterOptions: {
    reportDir: 'cypress/reporters', // setting the direction
    overwrite: true,
    html: true,
    json: false,
  },
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 120000,
  e2e: {
    chromeWebSecurity: false,
    browser: 'chrome',
    viewportHeight: 1080,
    viewportWidth: 1920,
    // "supportFile":"./cypress/support/e2e.js",
  },
});
