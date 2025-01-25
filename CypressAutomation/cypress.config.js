const { defineConfig } = require("cypress");
// const fs = require('fs-extra');
// const axios = require('axios');

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
