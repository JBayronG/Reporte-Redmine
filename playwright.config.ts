import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
   // baseURL: 'https://redmine.sqasa.co/login?back_url=http%3A%2F%2Fredmine.sqasa.co%2F',
    headless: true,
    viewport: { width: 1280, height: 720 },
    screenshot:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});