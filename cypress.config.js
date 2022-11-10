const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'g5kp19',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
  },
})