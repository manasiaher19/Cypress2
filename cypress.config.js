const { defineConfig } = require("cypress");

function subs(a, b) {
  return a - b
}

function Multiply(a, b) {
  return (a * b)
}

module.exports = defineConfig({
  e2e: {

    chromeWebSecurity: false,
    video: false,
    includeShadowDom:true,
    setupNodeEvents(on, config) {
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
