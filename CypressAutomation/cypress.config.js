const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const axios = require('axios');

module.exports = defineConfig({
  video: true,
  screenshotOnRunFailure: true
  e2e: {
    setupNodeEvents(on, config) {
      // Capture screenshot after each test failure
      on('after:screenshot', (details) => {
        console.log('Screenshot taken:', details.path);
      });
      return config;
    },
  },
  });
