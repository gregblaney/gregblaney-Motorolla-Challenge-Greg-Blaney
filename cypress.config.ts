import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "wkpzje",
  video: true,
  videosFolder: "cypress/downloads/videos",
  chromeWebSecurity: false,
  screenshotsFolder: "cypress/downloads/screenshots",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.video = true;
      config.videosFolder = "cypress/downloads/videos";
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
