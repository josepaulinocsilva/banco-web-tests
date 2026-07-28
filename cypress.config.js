const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    video: false, // desabilita a gravação de vídeo dos testes
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
