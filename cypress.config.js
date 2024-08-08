const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
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
  reporter: 'cypress-mochawesome-reporter', // Ajusta el reporter a cypress-mochawesome-reporter si es necesario
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
};
