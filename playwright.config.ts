
import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], 
    ['junit', { outputFile: 'test-results/results.xml' }]
  ],
});
``
