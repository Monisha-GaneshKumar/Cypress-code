const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const axios = require('axios');

module.exports = defineConfig({
  e2e: {
    video: true,
    screenshotOnRunFailure: true
    // setupNodeEvents(on, config) {
    //   on('task', {
    //     async downloadFile({ url, filePath }) {
    //       try {
    //         const response = await axios.get(url, { responseType: 'arraybuffer' });
    //         await fs.outputFile(filePath, response.data);
    //         return `File downloaded to ${filePath}`;
    //       } catch (error) {
    //         throw new Error(`Failed to download file: ${error.message}`);
    //       }
    //     }
    //   });

    //   return config;
    // },
  },
});
