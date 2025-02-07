const { defineConfig } = require("cypress");
// const fs = require('fs-extra');
// const axios = require('axios');

// let cypressJsonConfig = {};
// if (fs.existsSync("cypress.json")) {
//   cypressJsonConfig = JSON.parse(fs.readFileSync("cypress.json", "utf8"));
// }

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config){
      //video: true,
      screenshotOnRunFailure: true
      require('cypress-mochawesome-reporter/plugin')(on);
    }, 
   },
  });
