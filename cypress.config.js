const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "http://localhost:4000", // define a URL base para os testes
    reporter: "cypress-mochawesome-reporter",
    video: false, // desabilita a gravação de vídeo dos testes
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
