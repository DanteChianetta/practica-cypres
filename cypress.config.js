const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://demoblaze.com', // Ajusta esto a tu URL base
    video: true, // Habilita la grabación de video
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
  },
  reporter: 'mocha-allure-reporter', // Ajusta el reporter a cypress-mochawesome-reporter si es necesario
  reporterOptions: {
    targetDir: 'allure-results',
 },
});
