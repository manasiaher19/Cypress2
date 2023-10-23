const { defineConfig } = require("cypress");

function subs(a, b) {
  return a - b
}

function Multiply(a, b) {
  return (a * b)
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {

    chromeWebSecurity: false,
    video: false,
    includeShadowDom: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here

      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })

      on('task', {
        add({ a, b }) {
          return a + b
        }
      })

      on('task', {
        subs({ a, b }) {
          return subs(a, b)
        }
      })

      on('task', {
        Multiply({ a, b }) {
          return Multiply(a, b)
        }
      })
    },
  },
});
