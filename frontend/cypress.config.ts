import { defineConfig } from "cypress";
import {addMatchImageSnapshotPlugin} from 'cypress-image-snapshot/plugin';
export default defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1400,
    baseUrl: 'http://0.0.0.0:3333/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addMatchImageSnapshotPlugin(on, config)
    },
  }
});
