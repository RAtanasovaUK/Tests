import { defineConfig } from '@playwright/test';
import { createAzurePlaywrightConfig, ServiceOS } from '@azure/playwright';
import { DefaultAzureCredential } from '@azure/identity';
import dotenv from 'dotenv';

dotenv.config(); // Loads variables from .env

export default defineConfig(
  {},
  createAzurePlaywrightConfig(
    {},
    {
      os: ServiceOS.LINUX, // or ServiceOS.WINDOWS
      credential: new DefaultAzureCredential(),
      // Remove serviceUrl! It is read automatically from process.env.PLAYWRIGHT_SERVICE_URL 
      // serviceUrl: process.env.PLAYWRIGHT_SERVICE_URL, // <-- reads from .env
      connectTimeout: 3 * 60 * 1000,
      exposeNetwork: '<loopback>',
    }
  )
);